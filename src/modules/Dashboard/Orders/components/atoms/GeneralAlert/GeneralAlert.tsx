import {FC} from 'react';

import {
  AlertContainerDanger,
  AlertContainerInfo,
  AlertContainerSuccess,
  AlertContainerWarning,
  AlertIconDanger,
  AlertIconInfo,
  AlertIconSuccess,
  AlertIconWarning,
} from './GeneralAlert.styled';
import {AlertProps} from './types';

export const GeneralAlert: FC<AlertProps> = ({
  content,
  onClose,
  dataTestIdCloseButton,
  type,
  border = 'normal',
}) => {
  switch (type) {
    case 'success':
      return (
        <AlertContainerSuccess border={border}>
          <div>{content}</div>
          {onClose && (
            <AlertIconSuccess
              onClick={onClose}
              data-testid={dataTestIdCloseButton}
            />
          )}
        </AlertContainerSuccess>
      );
    case 'danger':
      return (
        <AlertContainerDanger border={border}>
          <div>{content}</div>
          {onClose && (
            <AlertIconDanger
              onClick={onClose}
              data-testid={dataTestIdCloseButton}
            />
          )}
        </AlertContainerDanger>
      );
    case 'warning':
      return (
        <AlertContainerWarning border={border}>
          <div>{content}</div>
          {onClose && (
            <AlertIconWarning
              onClick={onClose}
              data-testid={dataTestIdCloseButton}
            />
          )}
        </AlertContainerWarning>
      );
    case 'info':
      return (
        <AlertContainerInfo border={border}>
          <div>{content}</div>
          {onClose && (
            <AlertIconInfo
              onClick={onClose}
              data-testid={dataTestIdCloseButton}
            />
          )}
        </AlertContainerInfo>
      );
  }
};
