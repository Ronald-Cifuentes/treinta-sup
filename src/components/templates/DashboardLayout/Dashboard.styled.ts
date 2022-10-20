import styled from 'styled-components';

export const ToastContainer = styled.div`
  top: 0;
  position: fixed;
  z-index: 1500;
  width: calc(100% - 240px);
`;
export const ToastContent = styled.div`
  width: 100%;
  position: fixed;
  z-index: 1300;
  bottom: 0;
`;

export const BottomToastContainer = styled.div<{$withPadding: boolean}>`
  bottom: 0;
  right: 0;
  left: 0;
  position: absolute;
  z-index: 1500;
  width: auto;
`;
