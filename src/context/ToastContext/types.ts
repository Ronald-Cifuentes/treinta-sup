import {ToastTypes} from '@30sas/web-ui-kit-core';
import {ToastLocations} from 'config/constants';
import {FC} from 'react';

// TYPES
export interface ToastProps {
  location: ToastLocations;
}

export type VariantToast = 'default' | 'snackbar';

export interface ToastContextType {
  label: string | JSX.Element;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  severity: ToastTypes;
  setSeverity: (value: ToastTypes) => void;
  variantToast: VariantToast;
  open: boolean;
  location: ToastLocations;
  setLabel: React.Dispatch<React.SetStateAction<string | JSX.Element>>;
  setVariantToast: (value: VariantToast) => void;
  setOpen: (value: boolean, location?: ToastLocations) => void;
  Toast: FC<ToastProps>;
}
