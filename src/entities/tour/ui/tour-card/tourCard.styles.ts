import { styled } from 'styled-components';

import { ISTourCard } from '../../model/tourCard.types';

export const STourCard = styled.div<ISTourCard>`
  background: ${({ $color }) => $color};
  padding: 32px 0 32px 32px;
  border-radius: 32px;
  display: grid;
  gap: 12px;
  grid-template-columns: 0.8fr 1fr;
  grid-template-areas:
    'title icon'
    'description icon'
    'price icon';

  @media (max-width: 1023px) {
    padding: 24px;
    grid-template-columns: 1fr;
    grid-template-areas:
      'title'
      'description'
      'icon'
      'price';
  }
`;

export const SIcon = styled.div`
  grid-area: icon;
  position: relative;
  height: 262px;
  width: 280px;
  align-self: center;
  justify-self: center;

  @media (max-width: 1023px) {
    margin: 0 auto;
  }
`;

export const SIconFace = styled.div`
  position: absolute;
  top: 0;
  left: 64px;
`;

export const SIconUnFace = styled.div`
  position: absolute;
  top: 64px;
  left: 0;
`;

export const SPrice = styled.span`
  grid-area: price;
  font-family: 'Fira Sans', serif;
  font-weight: 700;
  font-size: 32px;

  @media (max-width: 1023px) {
    padding-top: 24px;
  }
`;

export const STitle = styled.h6`
  grid-area: title;
  font-family: 'Fira Sans', serif;
  font-weight: 600;
  font-size: 24px;
`;

export const SDescription = styled.p`
  grid-area: description;
  font-size: 16px;
  line-height: 120%;
  color: #7a7b7aff;
`;
