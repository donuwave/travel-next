import { styled } from 'styled-components';

export const SDocxViewer = styled.div<{ $contentHeight: number | null }>`
  width: 100%;
  max-width: 1360px;
  margin: 0 auto;
  background: white;
  border-radius: 24px;
  padding: 16px;
  overflow: hidden;
  min-height: ${({ $contentHeight }) => ($contentHeight ? `${$contentHeight}px` : '240px')};

  @media (max-width: 1024px) {
    padding: 8px;
    border-radius: 18px;
  }

  @media (max-width: 767px) {
    padding: 0;
    border-radius: 20px;
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

export const SDocxContent = styled.div<{ $scale: number }>`
  transform: scale(${({ $scale }) => $scale});
  transform-origin: top left;
  width: fit-content;

  .docx-wrapper,
  .docx,
  .docx > section {
    margin-left: 0 !important;
  }

  .docx img,
  .docx svg,
  .docx canvas {
    width: 100% !important;
    max-width: 100% !important;
    height: auto !important;
  }

  .docx img[style],
  .docx svg[style],
  .docx canvas[style] {
    width: 100% !important;
    max-width: 100% !important;
    height: auto !important;
    left: 0 !important;
  }

  .docx [style*='width'],
  .docx [style*='height'] {
    max-width: 100%;
  }

  .docx .docx-table,
  .docx table {
    max-width: 100% !important;
    table-layout: fixed;
    word-break: break-word;
  }

  .docx .docx-table td,
  .docx .docx-table th,
  .docx table td,
  .docx table th {
    word-break: break-word;
  }
`;

export const SDocxState = styled.div`
  min-height: 240px;
  display: grid;
  place-items: center;
  font-family: Inter, serif;
  color: rgba(37, 41, 43, 0.55);
`;
