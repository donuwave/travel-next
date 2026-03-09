import React, { FC } from 'react';

import {
  SDescription,
  SIcon,
  SIconFace,
  SIconUnFace,
  SPrice,
  STitle,
  STourCard,
} from './tourCard.styles';
import { ITourCard } from '../../model/tourCard.types';

const CardIcon: FC<Pick<ITourCard, 'Icon' | 'iconColors' | 'link'>> = ({
  Icon,
  iconColors,
  link,
}) => {
  return (
    <>
      <SIconUnFace>
        <Icon colors={iconColors} />
      </SIconUnFace>

      <SIconFace>
        <Icon colors={iconColors} imageUrl={link} />
      </SIconFace>
    </>
  );
};

export const CategoryTourCard: FC<ITourCard> = ({
  title,
  description,
  price,
  link,
  color,
  iconColors,
  Icon,
}) => {
  return (
    <STourCard $color={color}>
      <STitle>{title}</STitle>
      <SPrice>от {price} ₽</SPrice>
      <SIcon>
        <CardIcon Icon={Icon} iconColors={iconColors} link={link} />
      </SIcon>
      {description && <SDescription>{description}</SDescription>}
    </STourCard>
  );
};
