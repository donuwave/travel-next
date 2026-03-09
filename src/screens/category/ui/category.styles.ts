import Link from 'next/link';
import { styled } from 'styled-components';

export const SCategoryPage = styled.div<{ $background: string }>`
  display: grid;
  gap: 0;
  background: ${({ $background }) => $background};
  margin-top: -100px;
  padding-top: 140px;

  @media (max-width: 1024px) {
    padding-top: 128px;
  }
`;

export const SCategoryHero = styled.section`
  display: grid;
  grid-template-columns: 1.1fr 0.9fr;
  grid-template-areas:
    'copy visual'
    'price visual';
  gap: 48px;
  align-items: stretch;
  align-content: start;
  justify-content: start;
  justify-items: start;
  width: 100%;
  overflow: hidden;
  max-width: 1360px;
  margin: 0 auto 50px;
  padding-top: 64px;
  padding-bottom: 32px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'copy'
      'visual'
      'price';
    gap: 0;
    padding: 20px 18px 36px;
  }
`;

export const SHeroCopy = styled.div`
  grid-area: copy;
  max-width: 560px;
  padding-bottom: 24px;

  @media (max-width: 1024px) {
    max-width: none;
    padding-bottom: 0;
  }
`;

export const SBreadcrumbs = styled.div`
  width: 100%;
  max-width: 1360px;
  margin: 0 auto;

  .ant-breadcrumb {
    font-family: Inter, serif;
    font-size: 14px;
    color: rgba(37, 41, 43, 0.55);
  }

  .ant-breadcrumb-link,
  .ant-breadcrumb-separator {
    color: rgba(37, 41, 43, 0.55);
  }

  a {
    color: inherit;
    transition: color 0.3s ease;
  }

  a:hover {
    color: #25292b;
  }

  @media (max-width: 1024px) {
    max-width: none;
    margin: 0;
    padding: 16px;
    .ant-breadcrumb {
      font-size: 13px;
    }
  }
`;

export const SHeroTitle = styled.h1`
  font-family:
    Fira Sans,
    serif;
  font-size: clamp(42px, 4vw, 64px);
  font-weight: 700;
  line-height: 0.98;
  letter-spacing: -0.04em;
  color: #25292b;

  @media (max-width: 1024px) {
    margin-top: 8px;
    font-size: 32px;
    line-height: 0.98;
  }
`;

export const SHeroDescription = styled.p`
  max-width: 760px;
  margin-top: 16px;
  font-family: Inter, serif;
  font-size: 24px;
  line-height: 1.35;
  color: rgba(37, 41, 43, 0.65);
  padding-bottom: 140px;

  @media (max-width: 1024px) {
    max-width: 320px;
    margin-top: 14px;
    padding-bottom: 0;
    font-size: 16px;
    line-height: 1.38;
  }
`;

export const SHeroPrice = styled.div`
  grid-area: price;
  align-self: end;
  font-family:
    Fira Sans,
    serif;
  font-size: 32px;
  font-weight: 700;
  color: #25292b;

  @media (max-width: 1024px) {
    margin-top: 24px;
    font-size: 28px;
  }
`;

export const SHeroVisual = styled.div`
  grid-area: visual;
  position: relative;
  justify-self: end;
  width: clamp(320px, 34vw, 520px);
  aspect-ratio: 280 / 262;
  overflow: visible;

  @media (max-width: 1024px) {
    justify-self: center;
    width: min(100%, 390px);
    margin-top: 18px;
    padding-left: 16px;
  }
`;

export const SHeroIconBack = styled.div`
  position: absolute;
  top: 24.4%;
  left: 0;
  width: 78%;
  opacity: 0.22;
  filter: brightness(1.22) saturate(0.78);
  z-index: 1;

  & > svg {
    width: 100%;
    height: auto;
  }

  @media (max-width: 1024px) {
    top: 18%;
    left: -6%;
    width: 82%;
    opacity: 0.26;
  }
`;

export const SHeroIconFront = styled.div`
  position: absolute;
  top: 0;
  left: 22.8%;
  width: 78%;
  z-index: 2;

  & > svg {
    width: 100%;
    height: auto;
  }

  @media (max-width: 1024px) {
    left: 8%;
    width: 82%;
  }
`;

export const SCategoryOffers = styled.section`
  margin-top: -24px;
  background: #f7f7f7;
  padding: 32px 16px 0;
  z-index: 1;
  border-radius: 48px;

  @media (max-width: 1024px) {
    margin-top: 0;
    padding: 20px 0 0;
    border-radius: 32px 32px 0 0;
  }
`;

export const SCategoryOffersInner = styled.div`
  max-width: 1360px;
  margin: 0 auto;
  padding: 52px 36px;
  border-radius: 40px;

  @media (max-width: 1024px) {
    padding: 32px 16px;
    border-radius: 0;
  }
`;

export const SOffersTitle = styled.h2`
  text-align: center;
  font-family:
    Fira Sans,
    serif;
  font-size: 40px;
  font-weight: 700;
  color: #25292b;
  line-height: 110%;
`;

export const SOffersDescription = styled.p`
  margin-top: 12px;
  text-align: center;
  font-family: Inter, serif;
  font-size: 18px;
  color: rgba(37, 41, 43, 0.48);
`;

export const SOffersGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 16px;
  margin-top: 32px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    margin-top: 24px;
  }
`;

export const SOfferLink = styled(Link)`
  display: block;
`;

export const STourFormSection = styled.div`
  display: grid;
  grid-template-columns: 1.9fr 1.1fr;
  margin-top: 140px;
  gap: 64px;
  align-items: start;
  grid-template-areas:
    'info form'
    'connection form';

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
    gap: 24px;
    margin-top: 64px;
    grid-template-areas:
      'info'
      'form'
      'connection';
  }
`;
