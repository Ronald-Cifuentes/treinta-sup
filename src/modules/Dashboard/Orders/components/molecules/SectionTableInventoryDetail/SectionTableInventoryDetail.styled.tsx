import styled from 'styled-components';

export const SectionTableContainer = styled.div`
  margin: 0px 16px 20px 0px;
`;

export const WrapperBtnReturn = styled.div`
  margin-right: 10px;
`;

export const CtrlSection = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
`;

export const BtnUpdate = styled.button`
  color: #ebf9f1;
  border-color: transparent;
  border-radius: 4px;
  background: #009940;
  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 600;
  font-size: 0.875rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  height: 40px;
  padding-left: 24px;
  padding-right: 24px;
  cursor: pointer;
  &:hover {
    background: #0ac257;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
`;

export const InputBox = styled.textarea`
  height: 50px;
  margin-bottom: 16px;
  padding: 10px;
`;
