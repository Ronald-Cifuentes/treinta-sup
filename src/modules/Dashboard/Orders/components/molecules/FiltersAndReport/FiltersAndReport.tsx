import {CalendarsInput} from '@30sas/web-ui-kit-core';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {useNavigate} from 'react-router-dom';
import {
  Actions,
  Button,
  CalendarContainer,
  DownloadLink,
  MainContainer,
  Modal,
  UpdateButton,
  UpdateIcon,
} from './FiltersAndReport.styled';
import {PropTypesFiltersAndReport} from './types';

export const FiltersAndReport: FC<PropTypesFiltersAndReport> = ({
  onChange,
  disabled,
  showModal,
  dataTestId = 'filters-and-report',
  dataTestIdDataStudio = 'btn-datastudio',
  dataTestIdOrderUpdate = 'btn-orderupdate',
  dataTestIdCalendarInput = 'calendar-input',
}) => {
  const {t} = useTranslation();
  const history = useNavigate();

  const handleUpdate = (): void => {
    history({pathname: '/ordenes/actualizar'});
  };

  return (
    <MainContainer data-testid={dataTestId}>
      <CalendarContainer>
        {disabled ? (
          <CalendarsInput
            dataTestId={dataTestIdCalendarInput}
            locale="es"
            onChange={onChange}
          />
        ) : (
          <div />
        )}
      </CalendarContainer>
      <Actions>
        <Modal>
          <Button data-testid={dataTestIdDataStudio} onClick={showModal}>
            <FileDownloadIcon />
            <DownloadLink>
              {t('orders.filters-and-reports.btn-datastudio')}
            </DownloadLink>
          </Button>
        </Modal>
        {process.env.REACT_APP_ORDERS_UPDATE == 'true' ? (
          <UpdateButton
            data-testid={dataTestIdOrderUpdate}
            onClick={handleUpdate}>
            <UpdateIcon />
            {t('orders.filters-and-reports.btn-update-orders')}
          </UpdateButton>
        ) : (
          <div />
        )}
      </Actions>
    </MainContainer>
  );
};
