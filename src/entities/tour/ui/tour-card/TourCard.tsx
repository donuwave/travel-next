import React, { FC } from 'react';
import { ITourCard } from '../../model/tourCard.types';
import {
  STitle,
  SDescription,
  STourCard,
  SInfo,
  STextInfo,
  SPrice,
  SIcon,
  SIconFace,
  SIconUnFace,
} from './tourCard.styles';

export const TourCard: FC<ITourCard> = ({
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
      <SInfo>
        <STextInfo>
          <STitle>{title}</STitle>
          {description && <SDescription>{description}</SDescription>}
        </STextInfo>

        <SPrice>от {price} ₽</SPrice>
      </SInfo>
      <SIcon>
        <SIconUnFace>
          <Icon colors={iconColors} />
        </SIconUnFace>

        <SIconFace>
          <Icon colors={iconColors} imageUrl={link} />
        </SIconFace>
      </SIcon>
    </STourCard>
  );
};
