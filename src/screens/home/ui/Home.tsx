import React from 'react';

import {
  CategoryTourCard,
  TourOfferConnection,
  TourOfferInfo,
  TourOrderForm,
} from '@/entities/tour';
import { getCategoriesList } from '@/entities/tour/api/getCategories';
import { SearchTour } from '@/widgets/search-tour';
import { Subscribe } from '@/widgets/subscribe';

import {
  SBestTours,
  SBestToursContainer,
  SCardLink,
  SDescription,
  SHome,
  STitle,
  STourInformation,
  STourList,
} from './home.styles';

export const Home = async () => {
  const categories = await getCategoriesList();

  return (
    <SHome>
      <SearchTour />

      <SBestToursContainer id="tours">
        <STitle>Лучшие предложения по отдыху</STitle>
        <SDescription>
          Лучшие предложения к праздникам и на ближайшие даты — <br /> выбирайте и бронируйте онлайн
        </SDescription>

        <SBestTours>
          <STourList>
            {categories.map((tour) => (
              <SCardLink key={tour.id} href={`/categories/${tour.id}`}>
                <CategoryTourCard {...tour} />
              </SCardLink>
            ))}
          </STourList>

          <STourInformation id="tour-order">
            <TourOfferInfo />
            <TourOrderForm />
            <TourOfferConnection />
          </STourInformation>
        </SBestTours>
      </SBestToursContainer>

      <Subscribe />
    </SHome>
  );
};
