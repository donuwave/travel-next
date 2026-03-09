import { styled } from 'styled-components';

export const SFooterContainer = styled.div`
  background: #f5f0e8ff;
  padding-top: 64px;

  @media (max-width: 1024px) {
    padding: 48px 16px 0;
  }
`;

export const SFooter = styled.footer`
  max-width: 1360px;
  margin: 0 auto;
  display: grid;
  gap: 64px;

  @media (max-width: 1024px) {
    gap: 40px;
  }
`;

export const SInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 415px;
  gap: 48px;
  align-items: center;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 0;
  }
`;

export const SInformation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 24px;
`;

export const SText = styled.h5`
  font-family:
    Fira Sans,
    serif;
  font-weight: 600;
  font-size: 24px;
  line-height: 120%;

  @media (max-width: 1024px) {
    font-size: 20px;
  }
`;

export const SPayment = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
`;

export const SMap = styled.div`
  width: 100%;
  max-width: 415px;
  min-height: 175px;
  overflow: hidden;
  border-radius: 32px;
  justify-self: end;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const SMapMobile = styled.div`
  display: none;

  @media (max-width: 1024px) {
    display: block;
    width: 100%;
    min-height: 175px;
    overflow: hidden;
    border-radius: 24px;
  }
`;

export const SNavInformation = styled.span`
  color: #fa742dff;
  font-weight: 400;
  font-size: 12px;
`;

export const SNavFull = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  align-items: start;
  gap: 32px;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 48px;
  }
`;

export const SNavElement = styled.div`
  display: flex;
  gap: 36px;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 12px;
  }
`;

export const SNav = styled.nav`
  display: grid;
  gap: 16px;
`;

export const SLink = styled.a`
  font-family:
    Fira Sans,
    serif;
  font-weight: 600;
  font-size: 24px;
  transition: 0.3s all;

  @media (max-width: 1024px) {
    font-size: 20px;
  }

  &:hover {
    color: #fa742dff;
  }
`;

export const SAddress = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const SAddressItem = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  gap: 8px;

  @media (max-width: 1024px) {
    text-align: left;
  }
`;

export const SAddressText = styled.span`
  font-family:
    Fira Sans,
    serif;
  font-weight: 600;
  font-size: 20px;
  line-height: 120%;
`;

export const SBottomFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 0 40px 0;
  border-top: 1px solid #d9c9beff;
  font-family: Inter, serif;
  font-size: 12px;
  line-height: 120%;
  color: #25292bff;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    align-items: center;
    gap: 32px;
    padding: 24px 0 32px;
    text-align: center;
  }
`;

export const SBottomLeftFooter = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 48px;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    align-items: center;
    gap: 16px;
  }
`;

export const SSubLink = styled.a`
  text-decoration: underline;
  transition: 0.3s all;

  &:hover {
    color: #fa742dff;
  }
`;

export const SCreateWebsite = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  @media (max-width: 1024px) {
    display: none;
  }
`;
