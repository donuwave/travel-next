FROM node:18-alpine AS deps
WORKDIR /app

# включаем corepack и активируем нужную версию Yarn
RUN corepack enable \
 && corepack prepare yarn@4.9.2 --activate

# заставляем Yarn использовать классический node_modules
RUN echo "nodeLinker: node-modules" > .yarnrc.yml

# копируем только package*.json и lockfile
COPY package.json yarn.lock ./

# ставим прод-зависимости
RUN yarn install

# ─── 2. builder: копируем исходники и билдим ───
FROM node:18-alpine AS builder
WORKDIR /app

COPY . .
COPY --from=deps /app/node_modules ./node_modules

RUN yarn build

# ─── 3. runner: минимальный образ для запуска ───
FROM node:18-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

COPY --from=builder /app/package.json ./
COPY --from=builder /app/next.config.ts ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
# теперь эта папка точно есть
COPY --from=deps    /app/node_modules ./node_modules

EXPOSE 3000
CMD ["npx", "next", "start"]
