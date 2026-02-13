import React from 'react';
import {
  SConnection,
  SDescription,
  SInfo,
  SLink,
  SLinkConnection,
  STextLink,
  STitle,
  STitleConnection,
  STourOffer,
} from './tourOffer.styles';
import { MailIcon, PhoneIcon } from '@/shared/assets';

export const TourOffer = () => {
  return (
    <STourOffer>
      <SInfo>
        <STitle>
          Не нашли подходящий тур? <br />
          Подберём для вас персонально
        </STitle>
        <SDescription>
          Оставьте заявку — мы предложим варианты под ваши даты, бюджет <br /> и пожелания. Можно
          указать направление, количество человек и любые предпочтения. Ответим в ближайшее время
        </SDescription>
      </SInfo>

      <SConnection>
        <STitleConnection>
          Не любите формы? <br /> Тогда можете связаться с нами на прямую
        </STitleConnection>
        <SLinkConnection>
          <SLink href="tel:+7 (831) 213-72-02">
            <PhoneIcon />
            <STextLink>+7 (831) 213-72-02</STextLink>
          </SLink>
          <SLink href="tel:+7 (963) 230-72-02">
            <PhoneIcon />
            <STextLink>+7 (963) 230-72-02</STextLink>
          </SLink>
          <SLink href="mailto:mechta-tc@yandex.ru">
            <MailIcon />
            <STextLink>mechta-tc@yandex.ru</STextLink>
          </SLink>
        </SLinkConnection>
      </SConnection>
    </STourOffer>
  );
};
