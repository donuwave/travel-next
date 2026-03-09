'use client';

import Script from 'next/script';
import React from 'react';

import { SSelenaWidget } from './selenaTourWidget.styles';

type SelenaTourWidgetProps = {
  direction: string;
  adults: string;
  groupBy?: string;
  theme?: string;
};

export const SelenaTourWidget = ({
  direction,
  adults,
  groupBy,
  theme = 'orange',
}: SelenaTourWidgetProps) => {
  return (
    <>
      <Script
        id="selena-widget-script"
        src="https://fos.selena-online.ru/static/widget/js/app.js"
        strategy="afterInteractive"
      />

      <SSelenaWidget>
        {React.createElement('selena-widget', {
          token: 'kapitaltravel',
          theme,
          direction,
          where_source: 'ref',
          agent: '582b6e18-44db-4e6a-af9e-3301e16985c4',
          autoscroll: 'false',
          price_for_one: 'true',
          adults,
          ...(groupBy ? { group_by: groupBy } : {}),
        })}
      </SSelenaWidget>
    </>
  );
};
