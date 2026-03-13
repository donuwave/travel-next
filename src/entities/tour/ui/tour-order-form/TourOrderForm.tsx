'use client';

import { Button, Input } from 'antd';
import Link from 'next/link';
import React from 'react';

import { ROUTES } from '@/shared/config';

import { SCheckbox, SForm, SFormMain, STitle, STourOrderForm } from './tourOrderForm.styles';

export const TourOrderForm = () => {
  return (
    <STourOrderForm>
      <STitle>Заявка на подбор тура</STitle>
      <SForm>
        <SFormMain>
          <Input placeholder="ФИО" size="large" />
          <Input placeholder="Телефон" size="large" />
          <Input placeholder="Email" size="large" />
          <Input placeholder="Комментарий" size="large" />
        </SFormMain>

        <SCheckbox>
          Нажимая на кнопку «Обсудить задачу», подтверждаю своё согласие с{' '}
          <Link href={ROUTES.PRIVACY_POLICY}>положениями политики конфиденциальности</Link> и даю{' '}
          <Link href={ROUTES.PERSONAL_DATA_PROCESSING}>
            согласие на обработку персональных данных
          </Link>
        </SCheckbox>

        <Button type="primary" size="large">
          Отправить заявку
        </Button>
      </SForm>
    </STourOrderForm>
  );
};
