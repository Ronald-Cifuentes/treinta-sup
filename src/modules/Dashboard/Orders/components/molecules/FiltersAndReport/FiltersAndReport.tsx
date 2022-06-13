import React, {FC, useState} from 'react';
import {
  Dropdown,
  TreintaDropdownOptions,
  Calendar,
  CalendarRange,
  CalendarWeek,
  TreintaDropdownType,
} from '@30sas/web-ui-kit-core';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import {optionsTemporalRange} from './FilterAndReport.mock';

export interface PropTypesFiltersAndReport {
  onChange?: (value: Record<string, Date>) => void;
}

export const FiltersAndReport: FC<PropTypesFiltersAndReport> = ({onChange}) => {
  const [typeOfDate, setTypeOfDate] = useState<string | number | undefined>(
    'Diario',
  );

  const handleTemporalRange = (data: TreintaDropdownOptions): void => {
    setTypeOfDate(data.value);
  };

  const handleDate = (value: Record<string, Date>): void => {
    onChange && onChange(value);
  };

  const changeCalendar = (): React.ReactElement | undefined => {
    switch (typeOfDate) {
      case 'Diario':
        return (
          <Calendar
            dataTestId="mockedDateField"
            formatDate="d MMM yyyy"
            locale="es"
            onChange={handleDate}
            openTo="day"
            required
            value={new Date(Date.now())}
            views={['day']}
          />
        );
      case 'Semanal':
        return (
          <CalendarWeek onChange={handleDate} countCalendar={1} locale="es" />
        );
      case 'Mensual':
        return (
          <Calendar
            dataTestId="mockedDateField"
            formatDate="d MMM yyyy"
            locale="es"
            onChange={handleDate}
            openTo="month"
            required
            value={new Date(Date.now())}
            views={['month']}
          />
        );
      case 'Anual':
        return (
          <Calendar
            dataTestId="mockedDateField"
            formatDate="d MMM yyyy"
            locale="es"
            onChange={handleDate}
            openTo="year"
            required
            value={new Date(Date.now())}
            views={['year']}
          />
        );
      case 'Rango personalizado':
        return (
          <CalendarRange onChange={handleDate} countCalendar={1} locale="es" />
        );
    }
  };

  return (
    <div
      data-testid="filters-and-report"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <div style={{display: 'flex'}}>
        <div style={{width: '162px', height: '40px', marginRight: '8px'}}>
          <Dropdown
            AlingMenu="right"
            dropdownOptions={optionsTemporalRange}
            elementId="test"
            errorText="Error text"
            placeholder={optionsTemporalRange[0].label}
            defaultValue={optionsTemporalRange[0].label}
            typeRenderItem={TreintaDropdownType['OnlyLetter']}
            onChange={handleTemporalRange}
          />
        </div>
        <div style={{width: '184px', height: '40px'}}>{changeCalendar()}</div>
      </div>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          width: '160px',
          height: '24px',
          fontFamily: 'Nunito Sans',
          fontStyle: 'normal',
          fontWeight: '700',
          fontSize: '16px',
          lineHeight: '24px',
          color: '#1A2732',
          cursor: 'pointer',
        }}
        onClick={() => alert('Pendiente')}>
        <FileDownloadIcon />
        Descargar reporte
      </div>
    </div>
  );
};
