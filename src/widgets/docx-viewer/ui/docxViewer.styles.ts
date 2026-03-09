import { styled } from 'styled-components';

export const SDocxViewer = styled.div`
  width: 100%;
  max-width: 1360px;
  margin: 0 auto;
  background: white;
  border-radius: 24px;
  padding: 16px;
  overflow: auto;

  @media (max-width: 1024px) {
    padding: 8px;
    border-radius: 18px;
  }

  .docx-wrapper {
    background: transparent !important;
    padding: 0 !important;
  }

  .docx {
    margin: 0 auto !important;
    box-shadow: none !important;
    width: 100% !important;
    max-width: 100% !important;
  }

  .docx > section {
    width: 100% !important;
    max-width: 100% !important;
    min-width: 0 !important;
  }
`;

export const SDocxState = styled.div`
  min-height: 240px;
  display: grid;
  place-items: center;
  font-family: Inter, serif;
  color: rgba(37, 41, 43, 0.55);
`;
