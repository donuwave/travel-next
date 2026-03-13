import Link from 'next/link';
import { styled } from 'styled-components';

export const SPage = styled.main`
  background:
    radial-gradient(circle at top right, rgba(255, 255, 255, 0.45), transparent 22%),
    linear-gradient(180deg, #d9edf7 0%, #eaf5fb 100%);
  min-height: calc(100vh - 96px);
  margin-top: -100px;
  padding-top: 100px;
`;

export const SHero = styled.section`
  max-width: 1360px;
  margin: 0 auto;
  padding: 52px 24px 80px;

  @media (max-width: 1024px) {
    padding: 36px 16px 48px;
  }
`;

export const SBreadcrumb = styled.nav`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 28px;
  color: #8390a5;
  font-family: Inter, serif;
  font-size: 14px;
`;

export const SBreadcrumbLink = styled(Link)`
  transition: color 0.25s ease;

  &:hover {
    color: #fa742d;
  }
`;

export const SBreadcrumbCurrent = styled.span`
  color: #445064;
`;

export const SGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 720px) minmax(280px, 1fr);
  gap: 56px;
  align-items: start;

  @media (max-width: 1100px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

export const SIntro = styled.div`
  padding: 36px 32px 32px;

  @media (max-width: 1024px) {
    padding: 24px 20px;
    border-radius: 24px;
  }
`;

export const STitle = styled.h1`
  font-family:
    Fira Sans,
    serif;
  font-size: 44px;
  line-height: 1;
  font-weight: 700;
  color: #1f2a38;
  margin-bottom: 24px;

  @media (max-width: 1024px) {
    font-size: 34px;
    margin-bottom: 18px;
  }
`;

export const SText = styled.p`
  font-family: Inter, serif;
  font-size: 18px;
  line-height: 1.7;
  color: #5b6677;

  & + & {
    margin-top: 20px;
  }

  @media (max-width: 1024px) {
    font-size: 16px;
  }
`;

export const SSectionTitle = styled.h2`
  margin: 34px 0 24px;
  font-family:
    Fira Sans,
    serif;
  font-size: 30px;
  line-height: 1.15;
  font-weight: 700;
  color: #1f2a38;

  @media (max-width: 1024px) {
    font-size: 24px;
    margin-top: 28px;
  }
`;

export const SDetails = styled.div`
  display: grid;
  gap: 20px;
`;

export const SDetailTitle = styled.h3`
  margin-bottom: 8px;
  font-family:
    Fira Sans,
    serif;
  font-size: 18px;
  line-height: 1.2;
  font-weight: 700;
  color: #223041;
`;

export const SValue = styled.p`
  font-family: Inter, serif;
  font-size: 17px;
  line-height: 1.6;
  color: #586273;

  &[href] {
    color: #fa742d;
    text-decoration: underline;
    text-decoration-color: rgba(250, 116, 45, 0.35);
    text-underline-offset: 4px;
  }
`;

export const SDecorStack = styled.div`
  position: relative;
  min-height: 760px;
  align-self: start;
  padding-top: 300px;
  display: grid;
  justify-items: end;
  align-content: space-between;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const SDecorIcon = styled.img`
  max-width: 250px;
  height: auto;
  object-fit: contain;
`;

export const SDecorBottomIcon = styled.img`
  max-width: 350px;
  height: auto;
  object-fit: contain;
  padding-top: 200px;
`;

export const SDecorLeftIcon = styled.img`
  max-width: 180px;
  height: auto;
  object-fit: contain;
  justify-self: start;
`;
