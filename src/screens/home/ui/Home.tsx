import React from 'react';
import { TourOffer, TourOrderForm } from '@/entities/tour';
import { STourInformation } from './home.styles';

export const Home = () => {
  return (
    <div>
      <div>Header</div>
      <STourInformation>
        <TourOffer />
        <TourOrderForm />
      </STourInformation>
      <div>Footer</div>
    </div>
  );
};
