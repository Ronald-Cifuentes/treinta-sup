import {FC} from 'react';
import {CalendarsInput} from '@30sas/web-ui-kit-core';
import FileDownloadIcon from '@mui/icons-material/FileDownload';

import {EventProvider} from 'providers/event-provider';

import {getUser} from 'utils/infoUser';

import {PropTypesFiltersAndReport} from './types';

import {
  Modal,
  Button,
  Actions,
  Download,
  MainContainer,
  DownloadLink,
  CalendarContainer,
} from './FiltersAndReport.styled';

export const FiltersAndReport: FC<PropTypesFiltersAndReport> = ({
  onChange,
  disabled,
  showModal,
}) => (
  <MainContainer data-testid="filters-and-report">
    <CalendarContainer>
      {disabled ? <CalendarsInput locale="es" onChange={onChange} /> : <div />}
    </CalendarContainer>
    <Actions>
      <Download>
        <Button
          onClick={() => {
            EventProvider.getInstance().logEventAmplitude(
              'b2bs_orders_report_downloaded',
              {
                supplier: getUser()?.supplier,
              },
            );
          }}>
          <FileDownloadIcon />
          <DownloadLink
            href="https://metabase.treinta.co/dashboard/178-reportes-herramienta-suppliers?fecha=2022-07-01"
            target="_blank"
            rel="noreferrer">
            Descargar reporte
          </DownloadLink>
        </Button>
      </Download>
      <Modal>
        <Button onClick={showModal}>
          <FileDownloadIcon />
          <DownloadLink>Reporte DataStudio</DownloadLink>
        </Button>
      </Modal>
    </Actions>
  </MainContainer>
);
