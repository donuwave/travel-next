import { BussExcursionsIcon, BussIcon, ButterflyIcon, InfinityShapeIcon } from '@/shared/assets';

import { ITourCard } from './tourCard.types';

export type TourCategory = ITourCard & {
  slug: string;
  shortDescription: string;
  heroBackground: string;
  heroImage: string;
  offers: TourOffer[];
  selenaWidget?: {
    direction: string;
    adults: string;
    groupBy?: string;
  };
};

export type TourOffer = ITourCard & {
  slug: string;
  documentUrl: string;
  documentSummary?: {
    address?: string;
    mealPlan?: string;
    included?: string;
  };
};

export const tourCategories: TourCategory[] = [
  {
    slug: 'bus-tours',
    title: 'Автобусные туры на юг',
    shortDescription: 'Комфортные поездки к морю и солнцу с остановками в красивых местах по пути',
    description: 'Комфортные поездки к морю и солнцу с остановками в красивых местах по пути',
    price: '18 500',
    link: '/tour.png',
    heroImage: '/tour.png',
    Icon: BussIcon,
    iconColors: ['#FFEEC9', '#FFE7B2'],
    color: '#FCE2A9FF',
    heroBackground: '#f6e8c8',
    selenaWidget: {
      direction: '5',
      adults: '2',
      groupBy: 'hotel',
    },
    offers: [
      {
        slug: 'mechta-kislovodsk',
        title: 'Геленджик на выходные',
        price: '21 900',
        link: '/tour.png',
        Icon: BussIcon,
        iconColors: ['#FFF9F0', '#FAF3E8'],
        color: '#F5F0E8',
        documentUrl: '/docs/mechta.docx',
        documentSummary: {
          address: 'г. Кисловодск, ул. Клубная, д. 6',
          mealPlan: 'Питание: завтрак, 2-х разовое, 3-х разовое',
          included: 'В стоимость включено: проживание, питание по выбранному тарифу',
        },
      },
      {
        slug: 'lazarevskoe',
        title: 'Лазаревское без пересадок',
        price: '24 500',
        link: '/tour.png',
        Icon: BussIcon,
        iconColors: ['#FFF9F0', '#FAF3E8'],
        color: '#F5F0E8',
        documentUrl: '/docs/mechta.docx',
      },
      {
        slug: 'anapa-family',
        title: 'Семейный тур в Анапу',
        price: '26 300',
        link: '/tour.png',
        Icon: BussIcon,
        iconColors: ['#FFF9F0', '#FAF3E8'],
        color: '#F5F0E8',
        documentUrl: '/docs/mechta.docx',
      },
      {
        slug: 'arhipo-osipovka',
        title: 'Архипо-Осиповка',
        price: '23 400',
        link: '/tour.png',
        Icon: BussIcon,
        iconColors: ['#FFF9F0', '#FAF3E8'],
        color: '#F5F0E8',
        documentUrl: '/docs/mechta.docx',
      },
    ],
  },
  {
    slug: 'excursion-tours',
    title: 'Экскурсионные туры автобусом',
    shortDescription: 'Маршруты по знаковым локациям с гидом, прогулками и насыщенной программой',
    description: 'Маршруты по знаковым локациям с гидом, прогулками и насыщенной программой',
    price: '12 900',
    link: '/tour_1.png',
    heroImage: '/tour_1.png',
    Icon: BussExcursionsIcon,
    iconColors: ['#F6D9E3FF', '#F5CAD8FF'],
    color: '#F3C6D5FF',
    heroBackground: '#f4dbe6',
    selenaWidget: {
      direction: '1',
      adults: '2',
    },
    offers: [
      {
        slug: 'altai-skazka',
        title: 'Алтайская сказка',
        price: '29 900',
        link: '/tour_1.png',
        Icon: BussExcursionsIcon,
        iconColors: ['#FFF9F0', '#FAF3E8'],
        color: '#F5F0E8',
        documentUrl: '/docs/mechta.docx',
      },
      {
        slug: 'baikal',
        title: 'Байкал',
        price: '32 200',
        link: '/tour_1.png',
        Icon: BussExcursionsIcon,
        iconColors: ['#FFF9F0', '#FAF3E8'],
        color: '#F5F0E8',
        documentUrl: '/docs/mechta.docx',
      },
      {
        slug: 'kaliningrad-weekend',
        title: 'Мартовский weekend в Калининграде',
        price: '46 800',
        link: '/tour_1.png',
        Icon: BussExcursionsIcon,
        iconColors: ['#FFF9F0', '#FAF3E8'],
        color: '#F5F0E8',
        documentUrl: '/docs/mechta.docx',
      },
      {
        slug: 'sochi-excursion',
        title: 'Экскурсионный Сочи',
        price: '40 600',
        link: '/tour_1.png',
        Icon: BussExcursionsIcon,
        iconColors: ['#FFF9F0', '#FAF3E8'],
        color: '#F5F0E8',
        documentUrl: '/docs/mechta.docx',
      },
      {
        slug: 'dagestan-may',
        title: 'Майские каникулы в Дагестане',
        price: '58 900',
        link: '/tour_1.png',
        Icon: BussExcursionsIcon,
        iconColors: ['#FFF9F0', '#FAF3E8'],
        color: '#F5F0E8',
        documentUrl: '/docs/mechta.docx',
      },
    ],
  },
  {
    slug: 'air-travel',
    title: 'Путешествия на самолёте',
    shortDescription:
      'Быстрые перелёты и максимум впечатлений — для тех, кто ценит время и комфорт',
    description: 'Быстрые перелёты и максимум впечатлений — для тех, кто ценит время и комфорт',
    price: '29 900',
    link: '/tour_air.png',
    heroImage: '/tour_air.png',
    Icon: InfinityShapeIcon,
    iconColors: ['#DBDBF0FF', '#CDCDE9FF'],
    color: '#CBCBE5FF',
    heroBackground: '#dcd8f2',
    offers: [
      {
        slug: 'altai-air',
        title: 'Алтайская сказка',
        price: '29 900',
        link: '/tour_air.png',
        Icon: InfinityShapeIcon,
        iconColors: ['#FFF9F0', '#FAF3E8'],
        color: '#F5F0E8',
        documentUrl: '/docs/mechta.docx',
      },
      {
        slug: 'baikal-air',
        title: 'Байкал',
        price: '32 200',
        link: '/tour_air.png',
        Icon: InfinityShapeIcon,
        iconColors: ['#FFF9F0', '#FAF3E8'],
        color: '#F5F0E8',
        documentUrl: '/docs/mechta.docx',
      },
      {
        slug: 'kaliningrad-air',
        title: 'Мартовский weekend в Калининграде',
        price: '46 800',
        link: '/tour_air.png',
        Icon: InfinityShapeIcon,
        iconColors: ['#FFF9F0', '#FAF3E8'],
        color: '#F5F0E8',
        documentUrl: '/docs/mechta.docx',
      },
      {
        slug: 'sochi-air',
        title: 'Экскурсионный Сочи',
        price: '40 600',
        link: '/tour_air.png',
        Icon: InfinityShapeIcon,
        iconColors: ['#FFF9F0', '#FAF3E8'],
        color: '#F5F0E8',
        documentUrl: '/docs/mechta.docx',
      },
      {
        slug: 'dagestan-air',
        title: 'Майские каникулы в Дагестане',
        price: '58 900',
        link: '/tour_air.png',
        Icon: InfinityShapeIcon,
        iconColors: ['#FFF9F0', '#FAF3E8'],
        color: '#F5F0E8',
        documentUrl: '/docs/mechta.docx',
      },
    ],
  },
  {
    slug: 'train-tours',
    title: 'Туры на поезде',
    shortDescription: 'Уютные поездки по России — красивые виды, спокойный темп и романтика дороги',
    description: 'Уютные поездки по России — красивые виды, спокойный темп и романтика дороги',
    price: '14 900',
    link: '/tour_transit.png',
    heroImage: '/tour_transit.png',
    Icon: ButterflyIcon,
    iconColors: ['#EEFAC6FF', '#E3F0B7FF'],
    color: '#E1EDB8FF',
    heroBackground: '#eaf2ca',
    selenaWidget: {
      direction: '6',
      adults: '1',
    },
    offers: [
      {
        slug: 'golden-ring-train',
        title: 'Золотое кольцо поездом',
        price: '19 900',
        link: '/tour_transit.png',
        Icon: ButterflyIcon,
        iconColors: ['#FFF9F0', '#FAF3E8'],
        color: '#F5F0E8',
        documentUrl: '/docs/mechta.docx',
      },
      {
        slug: 'karelia-train',
        title: 'Карелия на поезде',
        price: '25 200',
        link: '/tour_transit.png',
        Icon: ButterflyIcon,
        iconColors: ['#FFF9F0', '#FAF3E8'],
        color: '#F5F0E8',
        documentUrl: '/docs/mechta.docx',
      },
      {
        slug: 'kazan-train',
        title: 'Казань и Свияжск',
        price: '22 100',
        link: '/tour_transit.png',
        Icon: ButterflyIcon,
        iconColors: ['#FFF9F0', '#FAF3E8'],
        color: '#F5F0E8',
        documentUrl: '/docs/mechta.docx',
      },
      {
        slug: 'spb-train',
        title: 'Санкт-Петербург',
        price: '28 300',
        link: '/tour_transit.png',
        Icon: ButterflyIcon,
        iconColors: ['#FFF9F0', '#FAF3E8'],
        color: '#F5F0E8',
        documentUrl: '/docs/mechta.docx',
      },
    ],
  },
];

export const getTourCategoryBySlug = (slug: string) =>
  tourCategories.find((category) => category.slug === slug);

export const getTourOfferBySlugs = (categorySlug: string, tourSlug: string) =>
  getTourCategoryBySlug(categorySlug)?.offers.find((tour) => tour.slug === tourSlug);
