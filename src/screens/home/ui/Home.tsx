import React from 'react';
import { TourOffer, TourOrderForm, TourCard, ITourCard } from '@/entities/tour';
import {
  SBestTours,
  SBestToursContainer,
  SDescription,
  SHome,
  STitle,
  STourInformation,
  STourList,
} from './home.styles';
import { BussExcursionsIcon, BussIcon, ButterflyIcon, InfinityShapeIcon } from '@/shared/assets';
import { Subscribe } from '@/widgets/subscribe';

export const bestTour: ITourCard[] = [
  {
    title: 'Автобусные туры на юг',
    description: 'Комфортные поездки к морю и солнцу с остановками в красивых местах по пути',
    price: '18 500',
    link: '/tour.png',
    Icon: BussIcon,
    iconColors: ['#FFEEC9', '#FFE7B2'],
    color: '#FCE2A9FF',
  },
  {
    title: 'Экскурсионные туры автобусом',
    description: 'Маршруты по знаковым локациям с гидом, прогулками и насыщенной программой',
    price: '12 900',
    link: '/tour_1.png',
    Icon: BussExcursionsIcon,
    iconColors: ['#F6D9E3FF', '#F5CAD8FF'],
    color: '#F3C6D5FF',
  },
  {
    title: 'Путешествия на самолёте',
    description: 'Быстрые перелёты и максимум впечатлений — для тех, кто ценит время и комфорт',
    price: '29 900',
    link: '/tour_air.png',
    Icon: InfinityShapeIcon,
    iconColors: ['#DBDBF0FF', '#CDCDE9FF'],
    color: '#CBCBE5FF',
  },
  {
    title: 'Туры на поезде',
    description: 'Уютные поездки по России — красивые виды, спокойный темп и романтика дороги',
    price: '14 900',
    link: '/tour_transit.png',
    Icon: ButterflyIcon,
    iconColors: ['#EEFAC6FF', '#E3F0B7FF'],
    color: '#E1EDB8FF',
  },
];

export const Home = () => {
  return (
    <SHome>
      <div>PreHeader</div>

      <SBestToursContainer>
        <STitle>Лучшие предложения по отдыху</STitle>
        <SDescription>
          Лучшие предложения к праздникам и на ближайшие даты — <br /> выбирайте и бронируйте онлайн
        </SDescription>

        <SBestTours>
          <STourList>
            {bestTour.map((tour) => (
              <TourCard key={tour.title} {...tour} />
            ))}
          </STourList>

          <STourInformation>
            <TourOffer />
            <TourOrderForm />
          </STourInformation>
        </SBestTours>
      </SBestToursContainer>

      <Subscribe />
    </SHome>
  );
};
