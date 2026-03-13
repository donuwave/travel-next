import Link from 'next/link';
import { styled } from 'styled-components';

export const SPage = styled.main`
  background: #ffffff;
  min-height: calc(100vh - 96px);

  margin-top: -100px;
  padding-top: 100px;
`;

export const SWrap = styled.section`
  max-width: 1360px;
  margin: 0 auto;
  padding: 46px 24px 88px;

  @media (max-width: 1024px) {
    padding: 32px 16px 48px;
  }
`;

export const SBreadcrumb = styled.nav`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 70px;
  color: #25292b;
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
  color: #4a5566;
`;

export const STitle = styled.h1`
  font-family:
    Fira Sans,
    serif;
  font-size: 32px;
  line-height: 1.05;
  font-weight: 700;
  color: #25292b;
  margin-bottom: 24px;

  @media (max-width: 1024px) {
    font-size: 30px;
  }
`;

export const SSection = styled.section`
  & + & {
    margin-top: 30px;
  }
`;

export const SSectionTitle = styled.h2`
  margin-bottom: 14px;
  font-family:
    Fira Sans,
    serif;
  font-size: 24px;
  line-height: 1.2;
  font-weight: 700;
  color: #232c38;

  @media (max-width: 1024px) {
    font-size: 20px;
  }
`;

export const SSectionText = styled.p`
  font-family: Inter, serif;
  font-size: 16px;
  line-height: 1.72;
  color: #5a6474;
  max-width: 980px;

  & + & {
    margin-top: 10px;
  }
`;

export const SList = styled.ul`
  margin-top: 12px;
  padding-left: 22px;
  display: grid;
  gap: 10px;
  color: #5a6474;
  font-family: Inter, serif;
  font-size: 16px;
  line-height: 1.65;
`;

export const SBlockList = styled.ul`
  margin-top: 10px;
  display: grid;
  gap: 8px;
  list-style: none;
  color: #5a6474;
  font-family: Inter, serif;
  font-size: 16px;
  line-height: 1.65;
`;
