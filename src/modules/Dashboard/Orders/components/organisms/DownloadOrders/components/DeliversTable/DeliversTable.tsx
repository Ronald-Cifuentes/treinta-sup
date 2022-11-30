/* eslint-disable react/jsx-no-useless-fragment */
import {useTranslation} from 'react-i18next';
import {FC, useEffect, useState} from 'react';
import InfoIcon from '@mui/icons-material/Info';
import {ActionButton, Toast} from '@30sas/web-ui-kit-core';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

import {useDownloadOrders} from 'hooks/useDownloadOrders';

import {format} from 'date-fns';
import {EventProvider} from 'providers/event-provider/event-provider';
import {getUser} from 'utils/infoUser';
import {
  Hour,
  Place,
  GetBatch,
  RowPlace,
  BatchInfo,
  RowBatches,
  BatchesEmpty,
  ContainerRow,
  BatchesMessage,
} from './DeliversTable.styled';

import {DeliversTableProps, GetOrdersByDateProps} from './types';

export const DeliversTable: FC<DeliversTableProps> = ({
  dataTestId = 'delivers_table_test',
  date = new Date(),
  dataTestIdGetBatch = 'get_batch',
}) => {
  const {t} = useTranslation();
  const selectDateRequest = format(date as Date, 'yyyy-MM-dd');

  const {dataRetrieve, refetchRetrieve, getUseOrdersDownloadByDate} =
    useDownloadOrders(selectDateRequest);
  const [showToast, setShowToast] = useState<boolean>(false);

  useEffect(() => {
    refetchRetrieve();
  }, [date, refetchRetrieve]);

  const getOrdersDownloadByDate = async (
    warehouseId: string,
    supplierId: string,
    batchHour: string,
    batchDate: string,
    warehouseName: string,
    // eslint-disable-next-line max-params
  ): Promise<GetOrdersByDateProps> => {
    const data = await getUseOrdersDownloadByDate(
      warehouseId,
      supplierId,
      batchHour,
      batchDate,
    );

    if (data !== undefined) {
      setShowToast(true);
    } else {
      // Send event to Amplitude only when file is downloaded
      EventProvider.getInstance().logEventAmplitude(
        `b2bs_orders_cut_off_downloaded`,
        {
          supplier: getUser()?.supplier,
          warehouse: warehouseName,
          cutOffDate: batchDate,
          cutOffHour: batchHour,
        },
      );
    }

    return data as GetOrdersByDateProps;
  };

  return (
    <div data-testid={dataTestId}>
      <>
        {dataRetrieve?.items?.length === 0 && (
          <h1>{t('download_orders.batch_day_empty')}</h1>
        )}
      </>
      {showToast && (
        <Toast
          label={t('download_orders.batch_day_empty_result')}
          // eslint-disable-next-line react/jsx-no-bind
          onClose={function handleClose() {
            return setShowToast(!showToast);
          }}
          open
          severity="danger"
        />
      )}
      <>
        {dataRetrieve?.items?.map((deliver, index1) => {
          const ind1 = `batch-list-${index1}`;
          return (
            <ContainerRow key={ind1}>
              <RowPlace>
                <Place>{deliver.name}</Place>
              </RowPlace>
              <RowBatches>
                {deliver.batches.map((batch, index2) => {
                  const ind = `batch-info-${index2}`;
                  return (
                    <BatchInfo key={ind}>
                      <GetBatch
                        data-testid={dataTestIdGetBatch}
                        onClick={() =>
                          getOrdersDownloadByDate(
                            deliver.warehouseId,
                            deliver.supplierId,
                            batch.hour,
                            batch.date,
                            deliver.name,
                          )
                        }>
                        <FileDownloadIcon
                          color={
                            batch.isEnable === true ? 'primary' : 'disabled'
                          }
                        />
                        {batch.isEnable === true && (
                          <Hour color="#2d79f4" action="underline">
                            {batch.hour}
                          </Hour>
                        )}
                      </GetBatch>
                      {batch.isEnable === false && (
                        <ActionButton
                          width={22}
                          label={batch.hour}
                          colorBg="neutrals"
                          colorBgType="300"
                          colorIcon="gray"
                          colorIconType="700"
                          labelColors="gray"
                          toolTipText={t('download_orders.tooltipMessage')}
                        />
                      )}
                    </BatchInfo>
                  );
                })}
                {deliver.batches.length === 0 && (
                  <BatchesEmpty>
                    <InfoIcon color="info" />
                    <BatchesMessage>
                      {t('download_orders.batch_empty')}
                    </BatchesMessage>
                  </BatchesEmpty>
                )}
              </RowBatches>
            </ContainerRow>
          );
        })}
      </>
    </div>
  );
};
