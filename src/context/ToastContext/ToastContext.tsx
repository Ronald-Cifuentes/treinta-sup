import {Toast, ToastTypes} from '@30sas/web-ui-kit-core';
import {createContext, useState, FC, useContext} from 'react';

import {ToastLocations} from 'config/constants';

// TYPES
export interface ToastProps {
  location: ToastLocations;
}

type VariantToast = 'default' | 'snackbar';

export interface ToastContextType {
  label: string | JSX.Element;
  title: string;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  severity: ToastTypes;
  variantToast: VariantToast;
  open: boolean;
  location: ToastLocations;
  setLabel: React.Dispatch<React.SetStateAction<string | JSX.Element>>;
  setSeverity: (value: ToastTypes) => void;
  setVariantToast: (value: VariantToast) => void;
  setOpen: (value: boolean, location?: ToastLocations) => void;
  Toast: FC<ToastProps>;
}

// CONTEXTS
const ToastContext = createContext<ToastContextType>({} as ToastContextType);

// PROVIDERS
export const ToastProvider: FC = ({children}) => {
  const [label, setLabel] = useState<string | JSX.Element>('');
  const [title, setTitle] = useState<string>('');
  const [severity, setSeverity] = useState<ToastTypes>('info');
  const [variantToast, setVariantToast] = useState<VariantToast>('default');
  const [isOpen, setIsOpen] = useState(false);
  const [location, setLocation] = useState(ToastLocations.GENERAL);

  const setOpen = (
    newIsOpen: boolean,
    newLocation: ToastLocations = ToastLocations.GENERAL,
  ): void => {
    setIsOpen(newIsOpen);
    setLocation(newLocation);
  };

  const closeToast = (): void => {
    setIsOpen(false);
    setVariantToast('default');
  };

  window.addEventListener('mousedown', () => {
    closeToast();
  });

  const ToastFC: FC<ToastProps> = ({location: locationToast}) => (
    <Toast
      severity={severity}
      label={label}
      title={title}
      width={variantToast === 'snackbar' ? '455px' : '100%'}
      typeToast={variantToast}
      open={isOpen && locationToast === location}
      timeout={5000}
      onClose={closeToast}
    />
  );

  const value: ToastContextType = {
    label,
    title,
    setTitle,
    setLabel,
    severity,
    setSeverity,
    location,
    open: isOpen,
    setOpen,
    variantToast,
    setVariantToast,
    Toast: ToastFC,
  };

  return (
    <ToastContext.Provider value={value}>{children}</ToastContext.Provider>
  );
};

// EXPORT HOOKS
export const useToast = (): ToastContextType => useContext(ToastContext);
