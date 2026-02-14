import { styled } from 'styled-components';
import { ISTourCard } from '../../model/tourCard.types';

export const STourCard = styled.div<ISTourCard>`
  background: ${({ $color }) => $color};
  padding: 32px 0 32px 32px;
  border-radius: 32px;
  display: grid;
  gap: 12px;
  grid-template-columns: 0.8fr 1fr;
`;

export const SInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const SIcon = styled.div`
  position: relative;
  height: 262px;
  width: 280px;
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

export const STextInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const SPrice = styled.span`
  font-family: 'Fira Sans', serif;
  font-weight: 700;
  font-size: 32px;
`;

export const STitle = styled.h6`
  font-family: 'Fira Sans', serif;
  font-weight: 600;
  font-size: 24px;
`;

export const SDescription = styled.p`
  font-size: 16px;
  line-height: 120%;
  color: #7a7b7aff;
`;
