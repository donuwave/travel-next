import React from 'react';
import { SCheckbox, SForm, SFormMain, STitle, STourOrderForm } from './tourOrderForm.styles';
import { Button, Input } from 'antd';

export const TourOrderForm = () => {
  return (
    <STourOrderForm>
      <STitle>Заявка на подбор тура</STitle>
      <SForm>
        <SFormMain>
          <Input />
          <Input />
          <Input />
          <Input />
        </SFormMain>

        <SCheckbox>
          Нажимая на кнопку «Обсудить задачу», подтверждаю своё согласие с{' '}
          <a>положениями политики</a> конфиденциальности и даю{' '}
          <a>согласие на обработку персональных данных</a>
        </SCheckbox>

        <Button size="large">Отправить заявку</Button>
      </SForm>
    </STourOrderForm>
  );
};
