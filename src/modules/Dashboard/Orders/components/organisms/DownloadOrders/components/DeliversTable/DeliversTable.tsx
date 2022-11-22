/* eslint-disable react/jsx-no-useless-fragment */
import {FC, useEffect} from 'react';
import {useTranslation} from 'react-i18next';
import InfoIcon from '@mui/icons-material/Info';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

import {useDownloadOrders} from 'hooks/useDownloadOrders';

import {format} from 'date-fns';
import {
  Hour,
  Place,
  RowPlace,
  BatchInfo,
  RowBatches,
  BatchesEmpty,
  ContainerRow,
  BatchesMessage,
} from './DeliversTable.styled';

import {DeliversTableProps} from './types';

export const DeliversTable: FC<DeliversTableProps> = ({
  dataTestId = 'delivers_table_test',
  date = new Date(),
}) => {
  const {t} = useTranslation();
  const selectDateRequest = format(date as Date, 'yyyy-MM-dd');

  const {dataRetrieve, refetchRetrieve} = useDownloadOrders(selectDateRequest);

  useEffect(() => {
    refetchRetrieve();
  }, [date, refetchRetrieve]);

  return (
    <div data-testid={dataTestId}>
      <>{dataRetrieve?.items?.length === 0 && <h1>No hay resultados</h1>}</>
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
                      <FileDownloadIcon color="primary" />
                      <Hour>{batch.hour}</Hour>
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
