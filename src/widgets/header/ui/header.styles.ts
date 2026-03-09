import { styled } from 'styled-components';

export const SHeaderShell = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 16px 24px 0;

  @media (max-width: 1024px) {
    padding: 12px 16px 0;
  }
`;

export const SHeader = styled.header`
  max-width: 1360px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 18px 24px;
  border-radius: 999px;
  background: #fa742d;
  border: 1px solid rgba(217, 201, 190, 0.7);
  color: white;
  backdrop-filter: blur(18px);
  box-shadow: 0 14px 44px rgba(37, 41, 43, 0.08);

  @media (max-width: 1024px) {
    padding: 14px 16px;
  }
`;

export const SBrand = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  font-family:
    Fira Sans,
    serif;
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
  letter-spacing: -0.03em;
  white-space: nowrap;
`;

export const SNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 28px;

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const SNavLink = styled.a`
  font-family: Inter, serif;
  font-size: 15px;
  color: white;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.7;
  }
`;

export const SContacts = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 120px;
  min-width: 120px;
  gap: 16px;

  @media (max-width: 1024px) {
    width: 44px;
    min-width: 44px;
    gap: 0;
  }
`;

export const SAction = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 44px;
  width: 120px;
  padding: 0 18px;
  border-radius: 999px;
  background: #fa742d;
  color: #fff;
  font-family: Inter, serif;
  font-size: 14px;
  font-weight: 600;
  white-space: nowrap;
  border: none;
  box-shadow: none;

  &::after {
    content: '|||';
    display: inline-block;
    margin-left: 10px;
    font-size: 12px;
    line-height: 1;
    letter-spacing: 1px;
    transform: rotate(90deg) translateX(-1px);
    transform-origin: center;
  }

  &[aria-expanded='true']::after {
    content: 'x';
    font-size: 18px;
    letter-spacing: 0;
    transform: translateY(-1px);
  }

  @media (max-width: 1024px) {
    display: none;
  }
`;

export const SContactDropdown = styled.div`
  display: grid;
  gap: 22px;
  min-width: 292px;
  padding: 28px 36px;
  border-radius: 32px;
  background: #f5f5f5;
  box-shadow: 0 10px 24px rgba(37, 41, 43, 0.16);
`;

export const SContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  color: #3b3b3b;
  padding-left: 16px;

  &:hover {
    color: #fa742d;
  }
`;

export const SContactText = styled.span`
  font-family:
    Fira Sans,
    serif;
  font-size: 20px;
  font-weight: 600;
  line-height: 1.15;
`;

export const SMenuButton = styled.button`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
  width: 44px;
  height: 44px;
  padding: 0 10px;
  border-radius: 999px;
  color: white;
`;

export const SMenuButtonLine = styled.span<{ $cross?: boolean }>`
  display: block;
  width: 100%;
  height: 2px;
  border-radius: 999px;
  background: currentColor;

  ${({ $cross }) =>
    $cross
      ? `
    &:first-child {
      transform: translateY(3.5px) rotate(45deg);
    }

    &:last-child {
      transform: translateY(-3.5px) rotate(-45deg);
    }
  `
      : ''}
`;

export const SDrawerContent = styled.div`
  display: grid;
  gap: 18px;
  width: 100%;
  max-width: 360px;
  padding: 14px 14px 18px;
  color: white;
`;

export const SDrawerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #f2e8e1;
`;

export const SDrawerLogo = styled.a`
  display: flex;
  align-items: center;
`;

export const SDrawerSection = styled.div`
  display: grid;
  gap: 18px;
  padding-bottom: 18px;
  border-bottom: 1px solid #f2e8e1;
`;

export const SDrawerLink = styled.a`
  font-family:
    Fira Sans,
    serif;
  font-size: 18px;
  padding-left: 16px;
  font-weight: 600;
  color: white;
`;

export const SDrawerContacts = styled.div`
  display: grid;
  gap: 24px;
  padding-top: 12px;

  ${SContactItem} {
    color: white;
  }

  ${SContactText} {
    font-size: 15px;
    font-weight: 600;
  }
`;

export const SDrawerAction = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 48px;
  margin-top: 12px;
  padding: 0 18px;
  border-radius: 999px;
  background: #fa742d;
  color: white;
  font-family: Inter, serif;
  font-size: 14px;
  font-weight: 600;

  @media (max-width: 1024px) {
    min-height: 44px;
    width: 100%;
    padding: 0 14px;
    font-size: 13px;
    background: rgba(255, 255, 255, 0.14);
  }
`;
