import Link from 'next/link';
import { styled } from 'styled-components';

export const SHome = styled.div``;

export const SBestToursContainer = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  background: #f7f7f7ff;
  border-radius: 48px;
  padding: 64px 0 128px 0;
  position: relative;
  z-index: 1;

  @media (max-width: 1024px) {
    padding: 64px 16px 16px 16px;
  }
`;

export const STitle = styled.h2`
  font-family:
    Fira Sans,
    serif;
  font-weight: 700;
  font-size: 32px;
  line-height: 110%;
  padding-bottom: 12px;
`;

export const SDescription = styled.p`
  font-family: Inter, serif;
  text-align: center;
  font-weight: 400;
  font-size: 20px;
  line-height: 140%;
  padding-bottom: 48px;
  color: #7a7b7aff;
`;

export const STourList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const SCardLink = styled(Link)`
  display: block;
`;

export const STourInformation = styled.div`
  display: grid;
  grid-template-columns: 1.9fr 1.1fr;
  grid-template-areas:
    'info form'
    'connection form';
  padding-top: 140px;
  align-items: start;
  gap: 64px;

  & > :nth-child(1) {
    grid-area: info;
  }

  & > :nth-child(2) {
    grid-area: form;
    align-self: center;
  }

  & > :nth-child(3) {
    grid-area: connection;
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'info'
      'form'
      'connection';
    padding-top: 64px;
    gap: 24px;
  }
`;

export const SBestTours = styled.div`
  max-width: 1264px;
  margin: 0 auto;
`;
