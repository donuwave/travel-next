import { styled } from 'styled-components';
import { Checkbox } from 'antd';

export const STourOrderForm = styled.div`
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 32px;
  padding: 24px 16px 16px 16px;
`;

export const STitle = styled.h4`
  font-family: 'Fira Sans', sans-serif;
  font-size: 20px;
  font-weight: 600;
  padding-bottom: 24px;
`;

export const SForm = styled.form`
  display: grid;
  gap: 16px;
`;

export const SFormMain = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const SCheckbox = styled(Checkbox)`
  .ant-checkbox-label {
    font-family: Inter, serif;
    font-size: 12px;
    font-weight: 400;
    color: #808080;

    & a {
      text-decoration: underline;
    }
  }
`;
