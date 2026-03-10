import { Breadcrumb } from 'antd';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';

import {
  CategoryTourCard,
  TourOfferConnection,
  TourOfferInfo,
  TourOrderForm,
} from '@/entities/tour';
import { getCategoriesList } from '@/entities/tour/api/getCategories';
import { getToursList } from '@/entities/tour/api/getToursList';
import { Subscribe } from '@/widgets/subscribe';

import {
  SBreadcrumbs,
  SCategoryHero,
  SCategoryOffers,
  SCategoryOffersInner,
  SCategoryPage,
  SHeroCopy,
  SHeroDescription,
  SHeroIconBack,
  SHeroIconFront,
  SHeroPrice,
  SHeroTitle,
  SHeroVisual,
  SOffersGrid,
  SOfferLink,
  STourFormSection,
  SOffersDescription,
  SOffersTitle,
} from './category.styles';

type CategoryPageProps = {
  id: string;
};

export const CategoryPage = async ({ id }: CategoryPageProps) => {
  const categories = await getCategoriesList();
  const category = categories.find((item) => String(item.id) === id);

  if (!category) {
    notFound();
  }

  const tours = await getToursList({ categoryId: String(category.id) });

  return (
    <SCategoryPage $background={category.heroBackground}>
      <SBreadcrumbs>
        <Breadcrumb
          items={[
            {
              title: <Link href="/">Главная страница</Link>,
            },
            {
              title: category.title,
            },
          ]}
        />
      </SBreadcrumbs>

      <SCategoryHero>
        <SHeroCopy>
          <SHeroTitle>{category.title}</SHeroTitle>
          <SHeroDescription>{category.shortDescription}</SHeroDescription>
        </SHeroCopy>

        <SHeroVisual>
          <SHeroIconBack>
            <category.Icon colors={category.iconColors} />
          </SHeroIconBack>
          <SHeroIconFront>
            <category.Icon colors={category.iconColors} imageUrl={category.image} />
          </SHeroIconFront>
        </SHeroVisual>

        <SHeroPrice>от {category.price} ₽</SHeroPrice>
      </SCategoryHero>

      <SCategoryOffers>
        <SCategoryOffersInner>
          <SOffersTitle>Подберите подходящий тур</SOffersTitle>
          <SOffersDescription>
            Сравните варианты и выберите поездку, которая подходит именно вам
          </SOffersDescription>

          <SOffersGrid>
            {tours.map((tour) => (
              <SOfferLink key={tour.id} href={`/categories/${category.id}/tour/${tour.id}`}>
                <CategoryTourCard {...tour} />
              </SOfferLink>
            ))}
          </SOffersGrid>

          <STourFormSection id="tour-order">
            <TourOfferInfo />
            <TourOrderForm />
            <TourOfferConnection />
          </STourFormSection>
        </SCategoryOffersInner>
      </SCategoryOffers>

      <Subscribe />
    </SCategoryPage>
  );
};
