import {FC} from 'react';
import {CalendarsInput} from '@30sas/web-ui-kit-core';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import {PropTypesFiltersAndReport} from './types';

export const FiltersAndReport: FC<PropTypesFiltersAndReport> = ({onChange}) => (
  <div
    data-testid="filters-and-report"
    style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
    <div style={{display: 'flex'}}>
      <CalendarsInput locale="es" onChange={onChange} />
    </div>
    <a
      href="https://metabase.treinta.co/dashboard/178-reportes-herramienta-suppliers?fecha=2022-07-01"
      target="_blank"
      rel="noreferrer"
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
      }}>
      <FileDownloadIcon />
      Descargar reporte
    </a>
  </div>
);
