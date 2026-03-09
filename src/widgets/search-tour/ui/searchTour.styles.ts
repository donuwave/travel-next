import { styled } from 'styled-components';

export const SSearchTour = styled.section`
  --search-hero-width: min(100%, 1010px);
  width: 100%;
  padding: 184px 32px 120px;
  background:
    radial-gradient(circle at top right, rgba(255, 255, 255, 0.45), transparent 22%),
    linear-gradient(180deg, #d9edf7 0%, #eaf5fb 100%);
  overflow: hidden;
  margin-bottom: -30px;
  margin-top: -100px;

  @media (max-width: 1024px) {
    padding: 178px 12px 80px;
    border-radius: 0;
  }
`;

export const SContent = styled.div`
  display: grid;
  justify-items: center;
  text-align: center;
`;

export const STitle = styled.h1`
  width: min(var(--search-hero-width), 72%);
  font-family:
    Fira Sans,
    serif;
  font-size: clamp(42px, 4vw, 68px);
  font-weight: 700;
  line-height: 0.98;
  letter-spacing: -0.04em;
  color: #25292b;

  @media (max-width: 1024px) {
    width: min(var(--search-hero-width), 88%);
    font-size: clamp(24px, 8.8vw, 30px);
    line-height: 1.04;
    letter-spacing: -0.03em;
    text-align: center;
  }
`;

export const SDescription = styled.p`
  width: min(var(--search-hero-width), 64%);
  margin-top: 24px;
  font-family: Inter, serif;
  font-size: 28px;
  line-height: 1.3;
  color: #4f5d66;

  @media (max-width: 1024px) {
    width: min(var(--search-hero-width), 90%);
    margin-top: 16px;
    font-size: clamp(13px, 4.1vw, 14px);
    line-height: 1.38;
  }
`;

export const SVisual = styled.div`
  position: relative;
  max-width: 770px;
  width: 100%;
  aspect-ratio: 720 / 454;
  margin-top: -60px;
  margin-bottom: -70px;

  @media (max-width: 1024px) {
    width: 70%;
    margin-top: 20px;
    margin-bottom: -75px;
  }

  @media (max-width: 768px) {
    margin-bottom: -55px;
  }

  @media (max-width: 568px) {
    margin-bottom: -45px;
  }

  @media (max-width: 468px) {
    margin-bottom: -35px;
  }
`;

export const SSearchPanel = styled.div`
  width: 100%;
  max-width: 980px;
  margin: 0 auto;
  position: relative;
  z-index: 2;

  @media (max-width: 1024px) {
    width: var(--search-hero-width);
    max-width: none;
    margin-top: 10px;
  }
`;
