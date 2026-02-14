'use client';

import React from 'react';
import { SCheckbox, SForm, SFormMain, STitle, STourOrderForm } from './tourOrderForm.styles';
import { Button, Input } from 'antd';

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
          <a onClick={(e) => e.preventDefault()}>положениями политики</a> конфиденциальности и даю{' '}
          <a onClick={(e) => e.preventDefault()}>согласие на обработку персональных данных</a>
        </SCheckbox>

        <Button type="primary" size="large">
          Отправить заявку
        </Button>
      </SForm>
    </STourOrderForm>
  );
};
