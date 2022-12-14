import {ColorProps} from '@30sas/web-ui-kit-theme';
import {DashboardLayout} from 'components/templates';
import {ACTIONS, useOrderBulkUpdate} from 'context/OrderBulkUpdateContext';
import {FC, useEffect} from 'react';
import {OrderBulkUpdateError} from './components/molecules/OrderBulkUpdateError';
import {OrderBulkUpdateSuccess} from './components/molecules/OrderBulkUpdateSuccess';
import {Steps} from './components/molecules/Steps';
import {OrderBulkUpdateContainer} from './OrderBulkUpdate.styled';
import {OrderBulkUpdateProps} from './types';

const LINE_PROPS: ColorProps = {
  baseColor: 'gray',
  gradient: '500',
};

export const OrderBulkUpdate: FC<OrderBulkUpdateProps> = ({
  dataTestId = 'order-bulk-update',
}) => {
  const {state, dispatch} = useOrderBulkUpdate();
  const {responseMassiveSave} = state;

  useEffect(() => {
    dispatch({type: ACTIONS.UPLOAD_FILE_RESET});
  }, [dispatch]);

  return (
    <DashboardLayout title="" fancyLineProps={LINE_PROPS} sizeFancyLine="0.5px">
      <OrderBulkUpdateContainer data-testid={dataTestId}>
        {responseMassiveSave.statusError && <OrderBulkUpdateError />}
        {responseMassiveSave.statusSuccess && <OrderBulkUpdateSuccess />}
        {!responseMassiveSave.statusSuccess &&
          !responseMassiveSave.statusError && <Steps />}
      </OrderBulkUpdateContainer>
    </DashboardLayout>
  );
};
