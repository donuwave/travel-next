import { styled } from 'styled-components';

export const STourOffer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 64px;
`;

export const SInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const STitle = styled.h3`
  font-family: 'Fira Sans', serif;
  font-size: 32px;
  letter-spacing: -1px;
  font-weight: 700;
  line-height: 110%;
`;

export const SDescription = styled.p`
  font-family: Inter, serif;
  font-weight: 400;
  font-size: 20px;
  color: #7a7b7a;
  line-height: 140%;
`;

export const SConnection = styled.div`
  background: #f2f2f2;
  padding: 24px;
  border-radius: 24px;
  display: grid;
  gap: 16px;
`;

export const STitleConnection = styled.h6`
  font-family: 'Inter', serif;
  font-weight: 400;
  font-size: 16px;
  color: #7a7b7a;
  line-height: 120%;
`;

export const SLinkConnection = styled.div`
  display: flex;
  align-items: center;
  gap: 48px;
`;

export const SLink = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const STextLink = styled.p`
  font-family: 'Fira Sans', serif;
  font-weight: 500;
  font-size: 16px;
  color: black;
`;
