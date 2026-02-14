import React from 'react';

import {
  SButton,
  SCamera,
  SDescription,
  SEarlierBooking,
  SInformationSubscribe,
  SSubscribe,
  SSubscribeContainer,
  STitle,
  SVk,
} from './subscribe.styles';
import { SubscribeIcon, VkIcon } from '@/shared/assets';

export const Subscribe = () => {
  return (
    <SSubscribeContainer>
      <SSubscribe>
        <SubscribeIcon />

        <SInformationSubscribe>
          <div>
            <STitle>
              Подписывайтесь, чтобы первым <br /> узнавать о выгодных предложениях <br /> и новинках
              сезона
            </STitle>
            <SDescription>
              Следите за новыми турами, акциями и сезонными <br /> подборками — публикуем свежие
              предложения <br /> и полезные советы для путешествий
            </SDescription>
          </div>

          <SButton size="large" type="primary" icon={<VkIcon />} iconPosition="end">
            Подписаться на сообщество
          </SButton>

          <SCamera src="/camera.png" />
          <SEarlierBooking src="/earlierBooking.png" />
          <SVk src="/vk.png" />
        </SInformationSubscribe>
      </SSubscribe>
    </SSubscribeContainer>
  );
};
