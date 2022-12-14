import {AxiosError, AxiosResponse} from 'axios';
import {OrderServices} from 'services/suppliers.orders/suppliers.orders.services';

export const orderServices = new OrderServices();

export const requestMassiveSave = async ({
  arr,
}): Promise<AxiosResponse | AxiosError> => {
  try {
    const orders = arr.map(item => ({
      ...item,
      typification: item.typification || '',
    }));
    const res = await orderServices.setMassiveStatusSave({orders});
    return res;
  } catch (error) {
    const realError = <AxiosError>error;
    return realError;
  }
};

export const setDataMassive = async ({
  state,
  dispatch,
  ACTIONS,
}): Promise<void> => {
  if (state) {
    const {
      responseVerification: {success},
    } = state;
    const arr = success;
    const numberBatch = 25;
    let remainingTasks = Math.ceil(arr?.length / numberBatch);
    let status = false;
    dispatch({
      type: ACTIONS.SET_PARAMETERS_LOADING,
      payload: {
        parametersLoading: {
          totalArray: arr?.length,
          totalTasks: remainingTasks,
          numberBatch,
        },
      },
    });
    dispatch({
      type: ACTIONS.SET_REMAINING_TASKS,
      payload: {remainingTasks},
    });
    for (let i = 0; i < arr?.length; i += numberBatch) {
      const res = await requestMassiveSave({
        arr: arr?.slice(i, i + numberBatch),
      });
      if (res.status == 200) {
        remainingTasks = remainingTasks - 1;
        dispatch({
          type: ACTIONS.SET_REMAINING_TASKS,
          payload: {remainingTasks},
        });
        status = true;
      } else {
        status = false;
        // eslint-disable-next-line no-console
        console.log('Error');
      }
    }
    if (status) {
      dispatch({
        type: ACTIONS.SET_RESPONSE_MASSIVE_SAVE,
        payload: {
          responseMassiveSave: {
            statusSuccess: true,
            statusError: false,
          },
        },
      });
    } else {
      dispatch({
        type: ACTIONS.SET_RESPONSE_MASSIVE_SAVE,
        payload: {
          responseMassiveSave: {
            statusSuccess: false,
            statusError: true,
          },
        },
      });
    }
  }
};

export const getDataMassiveVerification = ({
  formattedData,
  dispatch,
  ACTIONS,
}): void => {
  orderServices
    .getMassiveStatusVerification(formattedData)
    .then(response => {
      dispatch({
        type: ACTIONS.SET_RESPONSE_VERIFICATION,
        payload: {
          responseVerification: {
            success: response.data.success || [],
            errors: response.data.errors || [],
          },
        },
      });
    })
    .catch(err => {
      // eslint-disable-next-line no-console
      console.log('Error getMassiveStatusVerification ' + err);
    });
};
