import {ReactNode} from 'react';

export interface AlertProps {
  content: ReactNode;
  onClose?: () => void;
  dataTestIdCloseButton: string;
  type: 'success' | 'danger' | 'warning' | 'info';
  border?: 'normal' | 'radius';
}

export interface AlertContainerSuccessProps {
  border?: string;
}
export interface AlertContainerDangerProps {
  border?: string;
}
export interface AlertContainerWarningProps {
  border?: string;
}
export interface AlertContainerInfoProps {
  border?: string;
}
