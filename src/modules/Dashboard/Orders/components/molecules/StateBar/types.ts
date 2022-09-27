import {ChangeEvent} from 'react';
import {StatusDetail} from 'services/models';

export interface StateBarProps {
  status?: StatusDetail;
  handleChangeStates?: (e: ChangeEvent<HTMLSelectElement>) => void;
}
