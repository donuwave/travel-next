import { styled } from 'styled-components';

export const SSelenaWidget = styled.div`
  background: white;
  border-radius: 32px;
  padding: 12px;
  min-height: 560px;
  overflow: hidden;

  @media (max-width: 1024px) {
    min-height: 480px;
    border-radius: 24px;
  }
`;
