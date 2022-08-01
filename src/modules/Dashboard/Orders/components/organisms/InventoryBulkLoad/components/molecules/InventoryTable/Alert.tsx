import {FC} from 'react';

import {AlertContainer, AlertIcon} from './InventoryTable.styled';
import {AlertProps} from './types';

export const Alert: FC<AlertProps> = ({
  content,
  onClose,
  dataTestIdCloseButton,
}) => (
  <AlertContainer>
    <div>{content}</div>
    <AlertIcon onClick={onClose} data-testid={dataTestIdCloseButton} />
  </AlertContainer>
);
