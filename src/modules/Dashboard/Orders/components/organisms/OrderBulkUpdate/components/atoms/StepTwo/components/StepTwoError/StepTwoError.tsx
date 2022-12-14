import {TFunction} from 'i18next';
import {ChangeEvent, FC, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {GeneralAlert} from 'modules/Dashboard/Orders/components/atoms/GeneralAlert/GeneralAlert';
import {optionsTabs} from 'modules/Dashboard/Orders/components/organisms/OrderList/OrderList.config';
import {GenericResponseWithMsg} from 'services/suppliers.orders/types';
import {optionsTypificationErrors, pagination} from './StepTwoError.config';
import {ToastMessageError} from './ToastMessageError';
import {StepTwoErrorProps} from './types';

import {
  StepTwoErrorContainer,
  TitleStepTwoError,
  ToastErrorContainer,
  TypographyCustom,
  TableMuiCustom,
} from './StepTwoError.styled';

const checkMessageReturn = (message: string, t: TFunction): string => {
  const fromToStatus = message.match(/[A-Z][A-Z]+(?:_[A-Z]+)*/g);
  if (fromToStatus && fromToStatus.length > 1) {
    const keyFrom = optionsTabs.find(o => o.key === fromToStatus?.[0])?.label;
    const keyTo = optionsTabs.find(o => o.key === fromToStatus?.[1])?.label;
    return t('order-bulk-update.status-update-error', {keyFrom, keyTo});
  } else {
    return optionsTypificationErrors.find(x => x.key === message)
      ?.value as string;
  }
};
const dropDownDefaultValue = 25;

export const StepTwoError: FC<StepTwoErrorProps> = ({
  dataTestId = 'step-two-error-test',
  data = [],
}) => {
  const {t} = useTranslation();
  const [itemsByPage, setItemsByPage] = useState(dropDownDefaultValue);
  const [page, setPage] = useState(1);

  const columns = [
    {
      field: 'sequenceId',
      headerName: 'Consecutivo',
      width: 350,
    },
    {
      field: 'from',
      headerName: 'Desde',
      width: 350,
    },
    {
      field: 'to',
      headerName: 'Hacia',
      width: 350,
    },
    {
      field: 'message',
      headerName: 'Motivo',
      width: 350,
    },
  ];

  const preFormattedData = data.map((item, index) => ({
    ...item,
    from: optionsTabs.find(x => x.key === item.from)?.label,
    to: optionsTabs.find(x => x.key === item.to)?.label,
    message: checkMessageReturn(item.message, t),
    id: index,
  })) as GenericResponseWithMsg[];

  const formattedData = pagination(preFormattedData, page, itemsByPage);

  const handleSpecialPagination = (
    _event: ChangeEvent<unknown>,
    value: number,
  ): void => {
    setPage(value);
  };

  return (
    <>
      <ToastErrorContainer>
        <GeneralAlert
          content={<ToastMessageError numberError={preFormattedData.length} />}
          type="danger"
          border="radius"
          dataTestIdCloseButton="general-alert-toast"
        />
      </ToastErrorContainer>
      <TitleStepTwoError>
        <TypographyCustom
          variant="XLargebold"
          className=""
          margin="0"
          color="warning"
          colorType="900">
          {t('order-bulk-update.check-change-state-and-typifications')}
        </TypographyCustom>
      </TitleStepTwoError>
      <StepTwoErrorContainer data-testid={dataTestId}>
        <TableMuiCustom
          formattedData={formattedData}
          columns={columns}
          dropDownDefaultValue={dropDownDefaultValue}
          checkboxSelection={false}
          setItemsByPage={setItemsByPage}
          handleSpecialPagination={handleSpecialPagination}
          itemsByPage={itemsByPage}
          totalItems={preFormattedData.length}
        />
      </StepTwoErrorContainer>
    </>
  );
};
