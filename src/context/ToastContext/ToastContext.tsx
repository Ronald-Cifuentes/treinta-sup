import {createContext, useContext} from 'react';
import {ToastContextType} from './types';

// CONTEXTS
export const ToastContext = createContext<ToastContextType>(
  {} as ToastContextType,
);

// EXPORT HOOKS
export const useToast = (): ToastContextType => useContext(ToastContext);
