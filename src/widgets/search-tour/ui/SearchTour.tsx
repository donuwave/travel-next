'use client';

import Image from 'next/image';
import React from 'react';

import { SelenaTourWidget } from '@/widgets/selena-tour-widget';

import {
  SContent,
  SDescription,
  SSearchPanel,
  SSearchTour,
  STitle,
  SVisual,
} from './searchTour.styles';

export const SearchTour = () => {
  return (
    <SSearchTour>
      <SContent>
        <STitle>
          Найдите тур, <br /> который подходит именно вам
        </STitle>
        <SDescription>
          Выберите направление, даты и количество человек — и мы покажем доступные предложения.
          Можно сразу забронировать и оплатить онлайн
        </SDescription>

        <SVisual>
          <Image src="/chaiseLounge.png" alt="Шезлонги для поиска тура" fill />
        </SVisual>
      </SContent>

      <SSearchPanel>
        <SelenaTourWidget direction="1" adults="2" />
      </SSearchPanel>
    </SSearchTour>
  );
};
