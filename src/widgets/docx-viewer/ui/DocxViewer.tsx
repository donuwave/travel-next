'use client';

import React, { useEffect, useRef, useState } from 'react';

import { SDocxContent, SDocxState, SDocxViewer } from './docxViewer.styles';

type DocxViewerProps = {
  fileUrl: string;
};

const docsHostName = 'xn-----6kct8akavpcl7b.xn--p1ai';

const getDocumentRequestUrl = (fileUrl: string) => {
  try {
    const parsedUrl = new URL(fileUrl);

    if (parsedUrl.hostname === docsHostName) {
      return `${parsedUrl.pathname}${parsedUrl.search}`;
    }
  } catch {
    return fileUrl;
  }

  return fileUrl;
};

export const DocxViewer = ({ fileUrl }: DocxViewerProps) => {
  const viewportRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');
  const [scale, setScale] = useState(1);
  const [contentHeight, setContentHeight] = useState<number | null>(null);

  useEffect(() => {
    let disposed = false;

    const normalizeImages = () => {
      if (!contentRef.current) return;

      const images = contentRef.current.querySelectorAll('img');
      const imageContainers = contentRef.current.querySelectorAll(
        'div[style*="display: inline-block"]'
      );

      imageContainers.forEach((container) => {
        const element = container as HTMLDivElement;

        if (!element.querySelector('img')) return;

        element.style.width = '100%';
        element.style.maxWidth = '100%';
        element.style.height = 'auto';
        element.style.display = 'block';
        element.style.position = 'relative';
      });

      images.forEach((image) => {
        image.style.width = 'auto';
        image.style.maxWidth = '100%';
        image.style.height = 'auto';
        image.style.display = 'block';
        image.style.left = '0';
        image.style.top = '0';
      });
    };

    const syncLayout = () => {
      if (!viewportRef.current || !contentRef.current) return;

      const viewportWidth = viewportRef.current.clientWidth;
      const contentWidth = contentRef.current.scrollWidth;
      const nextScale =
        viewportWidth > 0 && contentWidth > viewportWidth ? viewportWidth / contentWidth : 1;
      const nextHeight = contentRef.current.scrollHeight * nextScale;

      setScale(nextScale);
      setContentHeight(nextHeight);
    };

    const renderDocument = async () => {
      if (!contentRef.current) return;

      setStatus('loading');
      setScale(1);
      setContentHeight(null);
      contentRef.current.innerHTML = '';

      try {
        const requestUrl = getDocumentRequestUrl(fileUrl);
        const [{ renderAsync }, response] = await Promise.all([
          import('docx-preview'),
          fetch(requestUrl),
        ]);

        if (!response.ok) {
          throw new Error(`Failed to load document: ${response.status}`);
        }

        const buffer = await response.arrayBuffer();
        if (disposed || !contentRef.current) return;

        await renderAsync(buffer, contentRef.current, undefined, {
          className: 'docx',
          inWrapper: true,
          ignoreWidth: true,
          ignoreHeight: true,
          breakPages: false,
        });

        if (!disposed) {
          normalizeImages();
          requestAnimationFrame(syncLayout);
          setStatus('idle');
        }
      } catch {
        if (!disposed) {
          setStatus('error');
        }
      }
    };

    renderDocument();

    const resizeObserver =
      typeof ResizeObserver !== 'undefined' && viewportRef.current
        ? new ResizeObserver(() => {
            requestAnimationFrame(syncLayout);
          })
        : null;

    if (resizeObserver && viewportRef.current) {
      resizeObserver.observe(viewportRef.current);
    }

    return () => {
      disposed = true;
      resizeObserver?.disconnect();
    };
  }, [fileUrl]);

  return (
    <SDocxViewer ref={viewportRef} $contentHeight={contentHeight}>
      {status === 'loading' && <SDocxState>Загрузка документа...</SDocxState>}
      {status === 'error' && <SDocxState>Не удалось загрузить документ.</SDocxState>}
      <SDocxContent
        ref={contentRef}
        $scale={scale}
        style={{ display: status === 'error' ? 'none' : 'block' }}
      />
    </SDocxViewer>
  );
};
