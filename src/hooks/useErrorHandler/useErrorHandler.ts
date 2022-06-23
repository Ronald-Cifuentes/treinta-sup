import {useEffect, useCallback} from 'react';
import {useTranslation} from 'react-i18next';

import {useToast} from 'context/ToastContext';

import {MessageError} from './types';

export const useErrorHandler = (
  hasError: boolean,
  {action, entity, message}: MessageError = {entity: 'generic'},
): void => {
  const {t} = useTranslation();
  const {setLabel, setOpen, setSeverity} = useToast();

  const getMessageByEntity = useCallback(() => {
    switch (entity) {
      case 'product':
        return 'commons.the-product';
      case 'transaction':
        return 'commons.the-transaction';
      case 'category':
        return 'commons.the-category';
      case 'contact':
        return 'commons.the-contact';
      case 'employees':
        return 'commons.the-employees';
      default:
        return 'commons.records';
    }
  }, [entity]);

  const getMessageByAction = useCallback(() => {
    switch (action) {
      case 'create':
        return 'commons.error-create';
      case 'update':
        return 'commons.error-update';
      case 'delete':
        return 'commons.error-delete';
      default:
        return 'commons.error-read';
    }
  }, [action]);

  const createMessage = useCallback(() => {
    if (message) {
      return t(message);
    }
    if (action && entity) {
      return t(getMessageByAction(), {entity: t(getMessageByEntity())});
    }
    return t('commons.generic-error');
  }, [message, getMessageByAction, getMessageByEntity, action, entity, t]);

  useEffect(() => {
    if (hasError) {
      setLabel(createMessage());
      setSeverity('danger');
      setOpen(true);
    }
  }, [hasError, setSeverity, createMessage, setLabel, setOpen]);
};
