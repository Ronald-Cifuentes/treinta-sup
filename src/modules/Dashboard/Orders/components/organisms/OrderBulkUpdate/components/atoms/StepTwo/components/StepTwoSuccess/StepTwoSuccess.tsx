import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {Typography} from '@30sas/web-ui-kit-core';
import {GeneralAlert} from 'modules/Dashboard/Orders/components/atoms/GeneralAlert/GeneralAlert';
import {optionsTabs} from '../../../../../../OrderList/OrderList.config';
import {OrderStatusTags} from '../../../../../../OrderList/OrderList.const';
import {RowState} from './RowState';
import {ToastMessageSuccess} from './ToastMessageSuccess';
import {
  StepTwoSuccessContainer,
  Card,
  TitleStepTwoSuccess,
  ToastContainer,
} from './StepTwoSuccess.styled';
import {StepTwoSuccessProps, SuccessDataFormatted} from './types';

import {optionsTypificationSuccess} from './StepTwoSuccess.config';

export const StepTwoSuccess: FC<StepTwoSuccessProps> = ({
  dataTestId = 'step-two-success-test',
  data = [],
}) => {
  const {t} = useTranslation();

  const dataFormatted = data.map(item => ({
    ...item,
    from: optionsTabs.find(x => x.key === item.from)?.label,
    to: optionsTabs.find(x => x.key === item.to)?.label,
  }));

  // En proceso
  const CONFIRMED = optionsTypificationSuccess['En Proceso'].map(item =>
    dataFormatted.filter(x => x.from === 'En Proceso' && x.to === item && x),
  );

  const dataFilteredCONFIRMEDtoSHIPPED = {
    from: 'En Proceso',
    quantity: CONFIRMED[0].length,
    to: optionsTypificationSuccess['En Proceso'][0],
  };

  const dataFilteredCONFIRMEDtoCANCELLED = {
    from: 'En Proceso',
    quantity: CONFIRMED[1].length,
    to: optionsTypificationSuccess['En Proceso'][1],
  };

  // En Ruta

  const SHIPPED = optionsTypificationSuccess['En Ruta'].map(item =>
    dataFormatted.filter(x => x.from === 'En Ruta' && x.to === item && x),
  );

  const dataFilteredSHIPPEDtoDELIVERED = {
    from: 'En Ruta',
    quantity: SHIPPED[0].length,
    to: optionsTypificationSuccess['En Ruta'][0],
  };

  const dataFilteredSHIPPEDtoRETURNED = {
    from: 'En Ruta',
    quantity: SHIPPED[1].length,
    to: optionsTypificationSuccess['En Ruta'][1],
  };

  const dataFilteredSHIPPEDtoPARTIALLYRETURNED = {
    from: 'En Ruta',
    quantity: SHIPPED[2].length,
    to: optionsTypificationSuccess['En Ruta'][2],
  };

  const dataFilteredSHIPPEDtoCANCELLED = {
    from: 'En Ruta',
    quantity: SHIPPED[3].length,
    to: optionsTypificationSuccess['En Ruta'][3],
  };

  // Devuelta

  const RETURNED = optionsTypificationSuccess['Devuelta'].map(item =>
    dataFormatted.filter(x => x.from === 'Devuelta' && x.to === item && x),
  );

  const dataFilteredRETURNEDtoSHIPPED = {
    from: 'Devuelta',
    quantity: RETURNED[0].length,
    to: optionsTypificationSuccess['Devuelta'][0],
  };

  // Devolución parcial

  const PARTIALLYRETURNED = optionsTypificationSuccess[
    'Devolución Parcial'
  ].map(item =>
    dataFormatted.filter(
      x => x.from === 'Devolución Parcial' && x.to === item && x,
    ),
  );

  const dataFilteredPARTIALLYRETURNEDtoSHIPPED = {
    from: 'Devolución Parcial',
    quantity: PARTIALLYRETURNED[0].length,
    to: optionsTypificationSuccess['Devolución Parcial'][0],
  };

  const successDataFormatted = [
    dataFilteredCONFIRMEDtoSHIPPED,
    dataFilteredCONFIRMEDtoCANCELLED,
    dataFilteredSHIPPEDtoDELIVERED,
    dataFilteredSHIPPEDtoRETURNED,
    dataFilteredSHIPPEDtoPARTIALLYRETURNED,
    dataFilteredSHIPPEDtoCANCELLED,
    dataFilteredRETURNEDtoSHIPPED,
    dataFilteredPARTIALLYRETURNEDtoSHIPPED,
  ] as SuccessDataFormatted[];

  return (
    <>
      <ToastContainer>
        <GeneralAlert
          content={<ToastMessageSuccess />}
          type="success"
          border="radius"
          dataTestIdCloseButton="general-alert-toast"
        />
      </ToastContainer>
      <TitleStepTwoSuccess>
        <Typography
          variant="Mediumbold"
          margin="0"
          color="neutrals"
          colorType="900">
          {t('order-bulk-update.check-state-changes-orders')}
        </Typography>
      </TitleStepTwoSuccess>
      <StepTwoSuccessContainer data-testid={dataTestId}>
        <Card display="block">
          {successDataFormatted.map((item, index) => {
            if (item.quantity > 0) {
              const ind = `row-state-${index}`;

              return (
                <RowState
                  key={ind}
                  tagLeftColor={OrderStatusTags[item.from]}
                  tagLeftText={item.from}
                  leftNumberOrders={`${item.quantity} órdenes`}
                  tagRightColor={OrderStatusTags[item.to]}
                  tagRightText={item.to}
                />
              );
            } else {
              return null;
            }
          })}
        </Card>
      </StepTwoSuccessContainer>
    </>
  );
};
