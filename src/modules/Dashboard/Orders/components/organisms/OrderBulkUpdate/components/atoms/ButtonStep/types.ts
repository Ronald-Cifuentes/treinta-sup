import {State} from 'context/OrderBulkUpdateContext';

export interface ButtonStepProps {
  disabled?: boolean;
  onClick?: () => void;
  dataTestId?: string;
}

export interface ContentProps {
  state: State;
}
