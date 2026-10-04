# ✈️ Travel — сайт туроператора

Коммерческий сайт туроператора на Next.js, **работает в продакшене**. Каталог туров с категориями, страница тура с фотографиями и датами, программы туров и договоры прямо в браузере, поиск туров через внешний виджет, карта офиса и юридические страницы.

![Next.js](https://img.shields.io/badge/Next.js_15-000000?style=flat&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React_19-20232A?style=flat&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![styled-components](https://img.shields.io/badge/styled--components-DB7093?style=flat&logo=styled-components&logoColor=white)
![Ant Design](https://img.shields.io/badge/Ant_Design-0170FE?style=flat&logo=antdesign&logoColor=white)
![Yandex Maps](https://img.shields.io/badge/Yandex_Maps_API_v3-FC3F1D?style=flat&logo=yandex&logoColor=white)

## Возможности

**Туры**
- Главная с подборкой туров и блоками предложений
- Категории туров и страница категории со списком туров
- Страница тура: фото, описание, цена, ближайшие даты, форма заявки
- Вложенные маршруты `/categories/[id]/tour/[tourId]`
- Динамическое меню категорий в шапке
- Поиск туров через встроенный виджет внешнего сервиса бронирования

**Документы**
- Просмотр программ туров и договоров в формате `.docx` прямо на сайте, без скачивания: рендеринг через `docx-preview`, извлечение текста через `mammoth`

**Остальное**
- Карта офиса на Yandex Maps JavaScript API v3 с ленивой загрузкой скрипта
- Блок подписки на рассылку
- Страницы «О компании», политика конфиденциальности, пользовательское соглашение, согласие на обработку персональных данных
- Светлая и тёмная тема

## Технические детали

- **Next.js App Router** с серверными компонентами: данные туров загружаются на сервере с ISR (`revalidate: 60`), поэтому страницы быстрые и индексируются поисковиками, а изменения в каталоге подтягиваются без пересборки
- **Свой HTTP-клиент** поверх `fetch`: сборка URL с query-параметрами, разные базовые адреса для сервера и браузера, логирование запросов с временем
- **Слой API по сущностям**: на каждый запрос отдельные типы ответа, валидация и конвертация из формата бэкенда (`snake_case`) в модели фронта, плюс подстановка полных URL для картинок
- Архитектура по **Feature-Sliced Design**: `app` / `screens` / `widgets` / `entities` / `shared`
- **styled-components** с SSR-регистром и **Ant Design** с общей темой
- Внешние скрипты (виджет бронирования, карты) подключаются через `next/script` и загружаются только на клиенте
- Docker-образ для деплоя

## Стек

Next.js 15, React 19, TypeScript, styled-components, Ant Design, Zustand, React Hook Form, Yup, docx-preview, mammoth, Yandex Maps API v3, Docker

## Запуск

```bash
git clone https://github.com/donuwave/travel-next.git
cd travel-next
yarn
yarn dev
```

Переменные окружения (`.env.local`):

```
API_BASE_URL=http://localhost:8000
```
