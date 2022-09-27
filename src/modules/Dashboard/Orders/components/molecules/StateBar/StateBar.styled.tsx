import {SpecialSelect} from 'components/atoms/SpecialSelect';
import styled from 'styled-components';

export const StateBarContainer = styled.div`
  display: block;
  position: fixed;
  width: calc(100% - 240px);
  left: 240px;
  bottom: 0;
  background: white;
  @media (max-width: 600px) {
    width: 100%;
    left: 0px;
  }
`;

export const StateBarContent = styled.div`
  display: grid;
  align-items: center;
  padding: 0px 32px 0px 32px;
  height: 64px;
  text-align: center;
  margin: 0;
  grid-template-columns: repeat(auto-fill, minmax(12.5rem, 1fr));

  font-family: 'Nunito Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
`;

export const StateBarSpecialSelect = styled(SpecialSelect)`
  display: grid;
  @media (min-width: 600px) {
    grid-column-end: -1;
  }
`;

export const StateBarStatusTitle = styled.div`
  min-width: 140px;
  margin: 0px 15px 0px 0px;
`;

export const StateBarStatusContent = styled.div``;
