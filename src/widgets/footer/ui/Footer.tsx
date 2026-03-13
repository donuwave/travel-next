'use client';

import dayjs from 'dayjs';
import React, { useEffect, useMemo, useState } from 'react';
import ReactDom from 'react-dom';

import { CreateSiteIcon, MasterCardIcon, MirIcon, SbpIcon, VisaIcon } from '@/shared/assets';
import { ROUTES } from '@/shared/config';

import {
  SAddress,
  SAddressItem,
  SAddressText,
  SBottomFooter,
  SBottomLeftFooter,
  SCreateWebsite,
  SFooter,
  SFooterContainer,
  SInfo,
  SInformation,
  SLink,
  SMap,
  SMapMobile,
  SNav,
  SNavElement,
  SNavFull,
  SNavInformation,
  SPayment,
  SSubLink,
  SText,
} from './footer.styles';

type LngLat = [number, number]; // ВАЖНО: [долгота, широта] (lng, lat)

type Marker = {
  id?: string;
  coordinates: LngLat;
  content?: React.ReactNode;
  draggable?: boolean;
  title?: string;
  subtitle?: string;
};

type Props = {
  apiKey: string;
  lang?: string; // например "ru_RU"
  center: LngLat;
  zoom: number;
  markers?: Marker[];
  style?: React.CSSProperties; // размеры контейнера
};

type Ymaps3Api = {
  ready: Promise<void>;
  import: {
    (moduleName: string): Promise<unknown>;
    registerCdn: (baseUrl: string, packages: string[]) => void;
  };
};

type Ymaps3CoreModule = {
  YMap: React.ComponentType<{
    location: unknown;
    children?: React.ReactNode;
  }>;
  YMapDefaultSchemeLayer: React.ComponentType;
  YMapDefaultFeaturesLayer: React.ComponentType;
};

type Ymaps3DefaultUiModule = {
  YMapDefaultMarker: React.ComponentType<{
    coordinates: LngLat;
    draggable?: boolean;
    iconName?: string;
    title?: string;
    subtitle?: string;
  }>;
};

type Ymaps3ReactifyModule = {
  reactify: {
    bindTo: (
      react: typeof React,
      reactDom: typeof ReactDom
    ) => {
      module: <T>(module: unknown) => T;
      useDefault: <T>(value: T, deps: unknown[]) => T;
    };
  };
};

const getYmaps3OrThrow = (): Ymaps3Api => {
  if (!window.ymaps3) {
    throw new Error('Yandex Maps JS API не инициализирован');
  }

  return window.ymaps3;
};

declare global {
  interface Window {
    ymaps3?: Ymaps3Api;
  }
}

const SCRIPT_ATTR = 'data-ymaps3-script';

const THEME_CSS_ATTR = 'data-ymaps3-default-ui-theme-css';

function ensureDefaultUiThemeCss() {
  if (document.querySelector(`link[${THEME_CSS_ATTR}]`)) return;

  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href =
    'https://cdn.jsdelivr.net/npm/@yandex/ymaps3-default-ui-theme@latest/dist/esm/index.css';
  link.setAttribute(THEME_CSS_ATTR, '1');
  document.head.appendChild(link);
}

function loadYmaps3Script(apiKey: string, lang: string): Promise<Ymaps3Api> {
  if (typeof window === 'undefined') {
    return Promise.reject(new Error('Yandex Maps можно грузить только в браузере (client-side).'));
  }

  // Уже загружено
  if (window.ymaps3) return Promise.resolve(window.ymaps3);

  // Уже добавляли script
  const existing = document.querySelector<HTMLScriptElement>(`script[${SCRIPT_ATTR}]`);
  if (existing) {
    return new Promise((resolve, reject) => {
      existing.addEventListener('load', () => {
        try {
          resolve(getYmaps3OrThrow());
        } catch (error) {
          reject(error);
        }
      });
      existing.addEventListener('error', () =>
        reject(new Error('Не удалось загрузить Yandex Maps JS API'))
      );
    });
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.setAttribute(SCRIPT_ATTR, '1');
    // Официальный способ подключения v3 :contentReference[oaicite:2]{index=2}
    script.src = `https://api-maps.yandex.ru/v3/?apikey=${encodeURIComponent(apiKey)}&lang=${encodeURIComponent(
      lang
    )}`;
    script.async = true;
    script.onload = () => {
      try {
        resolve(getYmaps3OrThrow());
      } catch (error) {
        reject(error);
      }
    };
    script.onerror = () => reject(new Error('Не удалось загрузить Yandex Maps JS API'));
    document.head.appendChild(script);
  });
}

let cdnRegistered = false;

async function loadReactApi(apiKey: string, lang: string) {
  const ymaps3 = await loadYmaps3Script(apiKey, lang);
  await ymaps3.ready;

  ensureDefaultUiThemeCss();

  if (!cdnRegistered) {
    ymaps3.import.registerCdn('https://cdn.jsdelivr.net/npm/{package}', [
      '@yandex/ymaps3-default-ui-theme@0.0',
    ]);
    cdnRegistered = true;
  }

  const ymaps3React = (await ymaps3.import('@yandex/ymaps3-reactify')) as Ymaps3ReactifyModule;
  const reactify = ymaps3React.reactify.bindTo(React, ReactDom);

  const { YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer } =
    reactify.module<Ymaps3CoreModule>(ymaps3);
  const { YMapDefaultMarker } = reactify.module<Ymaps3DefaultUiModule>(
    await ymaps3.import('@yandex/ymaps3-default-ui-theme')
  );

  return { reactify, YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapDefaultMarker };
}

export function YandexMap({ apiKey, lang = 'ru_RU', center, zoom, markers = [], style }: Props) {
  const [api, setApi] = useState<null | Awaited<ReturnType<typeof loadReactApi>>>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    setApi(null);
    setError(null);

    loadReactApi(apiKey, lang)
      .then((m) => !cancelled && setApi(m))
      .catch((e) => !cancelled && setError(e?.message ?? String(e)));

    return () => {
      cancelled = true;
    };
  }, [apiKey, lang]);

  const containerStyle = useMemo(() => ({ width: '100%', height: 400, ...style }), [style]);

  if (error) return <div style={containerStyle}>Ошибка: {error}</div>;
  if (!api) return <div style={containerStyle}>Загрузка карты…</div>;

  const { reactify, YMap, YMapDefaultSchemeLayer, YMapDefaultFeaturesLayer, YMapDefaultMarker } =
    api;

  // В v3 компоненты “uncontrolled”; документация рекомендует reactify.useDefault :contentReference[oaicite:4]{index=4}
  const location = reactify.useDefault({ center, zoom }, [center[0], center[1], zoom]);

  return (
    <div style={containerStyle}>
      <YMap location={location}>
        <YMapDefaultSchemeLayer />
        <YMapDefaultFeaturesLayer />

        {markers.map((m, idx) => (
          <YMapDefaultMarker
            key={m.id ?? idx}
            coordinates={m.coordinates}
            draggable={m.draggable}
            iconName="fallback"
            title={m.title}
            subtitle={m.subtitle}
          />
        ))}
      </YMap>
    </div>
  );
}

export const Footer = () => {
  const currentYear = dayjs().year();

  const map = (
    <YandexMap
      apiKey="ab5417a9-d4c1-4c68-a769-6ad1f1573efb"
      center={[43.874466, 56.248215]}
      zoom={10}
      style={{ height: 175, width: '100%' }}
      markers={[
        {
          coordinates: [43.874466, 56.248215],
          title: 'Нижний Новгород, проспект Ленина, 115',
          subtitle: 'офис 101 (1 этаж)',
        },
      ]}
    />
  );

  return (
    <SFooterContainer>
      <SFooter>
        <SInfo>
          <SInformation>
            <SText>
              Мечта-Тур — путешествия, которые легко выбрать и приятно вспоминать. <br /> Подбирайте
              туры по направлениям и датам, бронируйте онлайн <br /> и отправляйтесь отдыхать без
              лишних шагов
            </SText>
            <SPayment>
              <VisaIcon />
              <MirIcon />
              <MasterCardIcon />
              <SbpIcon />
            </SPayment>
          </SInformation>

          <SMap>{map}</SMap>
        </SInfo>

        <SNavFull id="contacts">
          <SNavElement>
            <SNavInformation>НАВИГАЦИЯ</SNavInformation>
            <SNav>
              <SLink href="">Автобусные туры на юг</SLink>
              <SLink href="">Экскурсионные туры</SLink>
              <SLink href="/about">О нас</SLink>
              <SLink href="">Контакты</SLink>
            </SNav>
          </SNavElement>
          <SNavElement>
            <SNavInformation>КОНТАКТЫ</SNavInformation>
            <SNav>
              <SLink href="tel:+7 (831) 213-72-02">+7 (831) 213-72-02</SLink>
              <SLink href="tel:+7 (963) 230-72-02">+7 (963) 230-72-02</SLink>
              <SLink href="mailto:mechta-tc@yandex.ru">mechta-tc@yandex.ru</SLink>
            </SNav>
          </SNavElement>
          <SAddress>
            <SAddressItem>
              <SNavInformation>АДРЕС</SNavInformation>
              <SAddressText>
                Нижний Новгород, проспект Ленина 115, <br /> офис 101 (1 этаж)
              </SAddressText>
            </SAddressItem>

            <SAddressItem>
              <SNavInformation>ГРАФИК РАБОТЫ</SNavInformation>
              <SAddressText>Понедельник - Пятница с 10:00 до 18:00</SAddressText>
            </SAddressItem>
          </SAddress>
        </SNavFull>

        <SMapMobile>{map}</SMapMobile>

        <SBottomFooter>
          <SBottomLeftFooter>
            <SCreateWebsite>
              <CreateSiteIcon />
              <div>Создание сайта</div>
            </SCreateWebsite>

            <SSubLink href={ROUTES.PRIVACY_POLICY}>Политика конфиденциальности</SSubLink>
            <SSubLink href={ROUTES.USER_AGREEMENT}>Пользовательское соглашение</SSubLink>
            <SSubLink href={ROUTES.PERSONAL_DATA_PROCESSING}>
              Обработка персональных данных
            </SSubLink>
          </SBottomLeftFooter>

          <div>© Мечта-Тур, 2020-{currentYear}. Все права защищены.</div>
        </SBottomFooter>
      </SFooter>
    </SFooterContainer>
  );
};
