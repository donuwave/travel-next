import Link from 'next/link';
import { styled } from 'styled-components';

export const STourPage = styled.div`
  display: grid;
  gap: 32px;
  background: white;
  margin-top: -100px;
  padding: 140px 16px 64px;

  @media (max-width: 1024px) {
    padding: 128px 12px 32px;
    gap: 20px;
  }
`;

export const STourContainer = styled.div`
  width: 100%;
  max-width: 1360px;
  margin: 0 auto;
`;

export const STourHero = styled.section`
  display: grid;
  grid-template-columns: 1fr 420px;
  gap: 32px;
  align-items: start;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const STourCopy = styled.div`
  display: grid;
  gap: 20px;
`;

export const STourBreadcrumbLink = styled(Link)`
  font-family: Inter, serif;
  font-size: 14px;
  color: rgba(37, 41, 43, 0.55);
`;

export const STourTitle = styled.h1`
  font-family:
    Fira Sans,
    serif;
  font-size: clamp(34px, 4vw, 56px);
  line-height: 0.98;
  font-weight: 700;
  letter-spacing: -0.04em;
  color: #25292b;
`;

export const STourMeta = styled.div`
  display: grid;
  gap: 10px;
  font-family: Inter, serif;
  font-size: 18px;
  color: rgba(37, 41, 43, 0.72);
`;

export const STourPrice = styled.div`
  font-family:
    Fira Sans,
    serif;
  font-size: 36px;
  font-weight: 700;
  color: #25292b;
`;

export const STourImage = styled.div`
  position: relative;
  height: 540px;
  overflow: hidden;
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.35);
`;
