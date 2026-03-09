'use client';

import React from 'react';

import { SubscribeIcon, VkIcon } from '@/shared/assets';
import { useDevice } from '@/shared/hooks';

import {
  SButton,
  SCamera,
  SDescription,
  SEarlierBooking,
  SInformationSubscribe,
  SMobileSubscribeCard,
  SSubscribe,
  SSubscribeContainer,
  STitle,
  SVk,
} from './subscribe.styles';

export const Subscribe = () => {
  const { isLaptops } = useDevice();

  return (
    <SSubscribeContainer>
      <SSubscribe>
        {!isLaptops && (
          <>
            <SubscribeIcon />

            <SInformationSubscribe>
              <div>
                <STitle>
                  Подписывайтесь, чтобы первым <br /> узнавать о выгодных предложениях <br /> и
                  новинках сезона
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
          </>
        )}

        {isLaptops && (
          <SMobileSubscribeCard>
            <STitle>
              Подписывайтесь, чтобы первым <br /> узнавать о выгодных предложениях <br /> и новинках
              сезона
            </STitle>
            <SDescription>
              Следите за новыми турами, акциями и сезонными подборками — публикуем свежие
              предложения и полезные советы для путешествий
            </SDescription>

            <SButton size="large" type="primary" icon={<VkIcon />} iconPosition="end">
              Подписаться на сообщество
            </SButton>
          </SMobileSubscribeCard>
        )}
      </SSubscribe>
    </SSubscribeContainer>
  );
};
