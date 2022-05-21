import styled from 'styled-components';

export const HoverContainer = styled.div<{
  disabled: boolean;
  dataTestId?: 'web-div-downloadListItem';
}>`
  :hover {
    background-color: ${({theme}) => theme.colors.gray[300]};
  }
  display: flex;
  align-items: center;
  padding: 5px;
  pointer-events: ${({disabled}) => (disabled ? 'none' : 'all')};
  background-color: ${({theme, disabled}) =>
    disabled ? theme.colors.gray[300] : 'transparent'};
`;
