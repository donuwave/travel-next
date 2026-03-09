'use client';

import React, { useEffect, useRef, useState } from 'react';

import { SDocxState, SDocxViewer } from './docxViewer.styles';

type DocxViewerProps = {
  fileUrl: string;
};

export const DocxViewer = ({ fileUrl }: DocxViewerProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle');

  useEffect(() => {
    let disposed = false;

    const renderDocument = async () => {
      if (!containerRef.current) return;

      setStatus('loading');
      containerRef.current.innerHTML = '';

      try {
        const [{ renderAsync }, response] = await Promise.all([
          import('docx-preview'),
          fetch(fileUrl),
        ]);

        if (!response.ok) {
          throw new Error(`Failed to load document: ${response.status}`);
        }

        const buffer = await response.arrayBuffer();
        if (disposed || !containerRef.current) return;

        await renderAsync(buffer, containerRef.current, undefined, {
          className: 'docx',
          inWrapper: true,
          ignoreWidth: true,
          ignoreHeight: true,
          breakPages: false,
        });

        if (!disposed) {
          setStatus('idle');
        }
      } catch {
        if (!disposed) {
          setStatus('error');
        }
      }
    };

    renderDocument();

    return () => {
      disposed = true;
    };
  }, [fileUrl]);

  return (
    <SDocxViewer>
      {status === 'loading' && <SDocxState>Загрузка документа...</SDocxState>}
      {status === 'error' && <SDocxState>Не удалось загрузить документ.</SDocxState>}
      <div ref={containerRef} style={{ display: status === 'error' ? 'none' : 'block' }} />
    </SDocxViewer>
  );
};
