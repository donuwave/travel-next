import { styled } from 'styled-components';
import { Button } from 'antd';

export const SSubscribeContainer = styled.div`
  min-height: 640px;
  width: 100%;
  position: relative;
  overflow: hidden;
  margin-top: -40px;
  display: grid;
`;

export const SSubscribe = styled.div`
  background-image: url('/subscribe_bg.jpg');
  background-size: cover;
  background-position: center;
  min-height: 640px;
  width: 100%;
  position: relative;
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

export const STitle = styled.h4`
  font-family:
    Fira Sans,
    serif;
  font-size: 32px;
  line-height: 110%;
  font-weight: 700;
  padding-bottom: 12px;
`;

export const SDescription = styled.span`
  font-family: Inter, serif;
  font-size: 20px;
  line-height: 140%;
  color: #7a7b7aff;
`;

export const SButton = styled(Button)`
  .ant-btn-icon {
    height: 18px;
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
