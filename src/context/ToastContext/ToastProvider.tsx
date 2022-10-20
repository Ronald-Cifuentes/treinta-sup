import {Toast, ToastTypes} from '@30sas/web-ui-kit-core';
import {useState, FC, useEffect} from 'react';
import {ToastLocations} from 'config/constants';
import {ToastContextType, ToastProps, VariantToast} from './types';
import {ToastContext} from './ToastContext';

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

  useEffect(() => {
    const ControlToast = (): void => {
      closeToast();
    };

    window.addEventListener('mousedown', ControlToast);

    return () => {
      window.removeEventListener('mousedown', ControlToast);
    };
  }, []);

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
