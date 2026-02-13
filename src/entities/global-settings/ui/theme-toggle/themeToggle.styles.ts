import { styled } from 'styled-components';

export const SThemeToggle = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${({ theme }) => theme.colors.additional};
  padding: 18px 0;
`;

export const SInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const STitle = styled.span`
  font-weight: 700;
`;
