import {useEffect} from 'react';
import {useUploadBulk, ACTIONS} from 'context/UploadBulkContext';

import {UseCheckBulkUpload} from './types';

export const useCheckBulkUpload = (): UseCheckBulkUpload => {
  const {dispatch} = useUploadBulk();
  const {mutateAsync, isLoading, isError, data, error, isSuccess} = {
    mutateAsync: () => 'test',
    isLoading: false,
    isError: false,
    data: [],
    error: 'error',
    isSuccess: false,
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch({
        type: ACTIONS.UPLOAD_FILE_SUCCESS,
        payload: {data: {}},
      });
    }
  }, [dispatch, isSuccess]);

  return {onValidate: mutateAsync, isLoading, isError, data, error, isSuccess};
};
