/* eslint-disable @typescript-eslint/no-explicit-any */
export interface GenericProps {
  openModal: boolean;
  onCloseModal: () => void;
  onConfirm: (items: any[]) => void;
  items?: any[];
  title: string;
  subtitle: string;
  PopupProps?: Record<string, string>;
  dataTestId?: string;
  dataTestIdCloseButton?: string;
  dataTestIdContinueButton?: string;
  dataTestIdBackButton?: string;
}
