import { Button } from 'antd';
import { styled } from 'styled-components';

export const SSubscribeContainer = styled.div`
  min-height: 640px;
  width: 100%;
  position: relative;
  overflow: hidden;
  margin-top: -40px;
  display: grid;

  @media (max-width: 1024px) {
    min-height: auto;
  }
`;

export const SSubscribe = styled.div`
  background-image: url('/subscribe_bg.jpg');
  background-size: cover;
  background-position: center;
  min-height: 640px;
  width: 100%;
  position: relative;

  @media (max-width: 1024px) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 16px 32px;
  }
`;

export const SInformationSubscribe = styled.div`
  display: grid;
  justify-content: space-between;
  justify-items: start;
  grid-template-rows: 1fr max-content;
  width: 940px;
  height: 360px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 32px;
`;

export const SMobileSubscribeCard = styled.div`
  display: grid;
  justify-items: start;
  gap: 20px;
  width: min(100%, 420px);
  text-align: start;
  background: #dbeff8;
  border-radius: 44px;
  padding: 24px;
`;

export const STitle = styled.h4`
  font-family:
    Fira Sans,
    serif;
  font-size: 32px;
  line-height: 110%;
  font-weight: 700;
  padding-bottom: 12px;

  @media (max-width: 1024px) {
    font-size: 26px;
    padding-bottom: 0;
  }
`;

export const SDescription = styled.span`
  font-family: Inter, serif;
  font-size: 20px;
  line-height: 140%;
  color: #7a7b7aff;

  @media (max-width: 1024px) {
    font-size: 16px;
  }
`;

export const SButton = styled(Button)`
  .ant-btn-icon {
    height: 18px;
  }

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const SCamera = styled.img`
  position: absolute;
  top: 10%;
  left: 100%;
  transform: translate(-50%, -50%);
`;

export const SEarlierBooking = styled.img`
  position: absolute;
  top: 100%;
  left: 100%;
  transform: translate(-50%, -50%);
`;

export const SVk = styled.img`
  position: absolute;
  top: 100%;
  left: 65%;
  transform: translate(-50%, -50%);
`;
