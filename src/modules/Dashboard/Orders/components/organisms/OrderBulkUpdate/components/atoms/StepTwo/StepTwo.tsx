import {ACTIONS, useOrderBulkUpdate} from 'context/OrderBulkUpdateContext';
import {FC, useEffect} from 'react';
import {getDataMassiveVerification} from '../../../OrderBulkUpdate.func';
import {StepTwoError} from './components/StepTwoError';
import {StepTwoSuccess} from './components/StepTwoSuccess';
import {StepTwoLoading} from './components/StepTwoLoading';
import {StepTwoProps} from './types';

export const StepTwo: FC<StepTwoProps> = () => {
  const {state, dispatch} = useOrderBulkUpdate();
  const {
    formattedData,
    remainingTasks,
    responseVerification: {success, errors},
  } = state;
  useEffect(() => {
    getDataMassiveVerification({formattedData, dispatch, ACTIONS});
  }, [dispatch, formattedData]);

  useEffect(() => {
    if (success?.length > 0 && errors?.length === 0) {
      dispatch({type: ACTIONS.SET_BUTTON_STEP, payload: {buttonStep: 2}});
    }

    if (errors?.length > 0) {
      dispatch({type: ACTIONS.SET_BUTTON_STEP, payload: {buttonStep: 1}});
    }
  }, [dispatch, errors?.length, success?.length]);

  return (
    <div data-testid="step-two-test">
      {!(remainingTasks > 0) && success?.length > 0 && errors?.length === 0 && (
        <StepTwoSuccess data={success} />
      )}
      {!(remainingTasks > 0) && errors?.length > 0 && (
        <StepTwoError data={errors} />
      )}
      {remainingTasks > 0 && <StepTwoLoading />}
      {/* <StepTwoLoading /> */}
    </div>
  );
};
