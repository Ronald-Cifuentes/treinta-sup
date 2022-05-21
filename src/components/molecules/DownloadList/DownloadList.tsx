import {FC} from 'react';
import {AxiosResponse} from 'axios';
import {useTranslation} from 'react-i18next';
import {Alert} from '@30sas/web-ui-kit-core';
import {TreintaTheme} from '@30sas/web-ui-kit-theme';
import {PdfIcon, ExcelIcon, InfoIcon} from '@30sas/web-ui-kit-icons';

import {useDashboard} from 'context/DashboardContext';
import {EventProvider} from 'providers/event-provider';
import {Events} from 'config/constants';
import {RightBarContainer} from 'components/molecules/RightBarContainer/RightBarContainer';

import {useToast} from 'context/ToastContext';
import {Container} from './DownloadList.styled';
import {DownloadListItem} from './DownloadListItem';
import {DownloadListItemProps, DownloadListProps} from './types';

const pushEvent = (type: string, moduleName: string): void => {
  EventProvider.getInstance().logGlobalEvent({
    amplitudeEvents: [
      {
        eventName: Events.INVENTORY_BALANCE_DOWNLOAD_REPORT,
        args: {origin: moduleName, file: type},
      },
    ],
  });
};

export const DownloadList: FC<DownloadListProps> = ({moduleName}) => {
  const {setLoadingReportFileDownload} = useDashboard();
  const {t} = useTranslation();
  const {setLabel, setOpen, setSeverity} = useToast();

  const callToast = (): void => {
    setLabel(t('balance.download-loading'));
    setOpen(true);
    setLoadingReportFileDownload(true);
    setSeverity('loading');
  };
  const handleDownloadReportPDF = (): Promise<AxiosResponse> | void => {
    pushEvent('pdf', t(`left-menu.${moduleName}`));
    callToast();
  };

  const handleDownloadReportExcel = (): Promise<AxiosResponse> | void => {
    pushEvent('excel', t(`left-menu.${moduleName}`));
    callToast();
  };

  const downloadOptions: DownloadListItemProps[] = [
    {
      text: `${t(`commons.download-report`)} ${t(
        `left-menu.${moduleName}`,
      ).toLocaleLowerCase()} ${t(`commons.in-pdf`)}`,
      Icon: PdfIcon,
      color: TreintaTheme.colors.danger[700] as string,
      downloadFX: handleDownloadReportPDF,
    },
    {
      text: `${t(`commons.download-report`)} ${t(
        `left-menu.${moduleName}`,
      ).toLocaleLowerCase()} ${t(`commons.in-excel`)}`,
      Icon: ExcelIcon,
      color: TreintaTheme.colors.tertiary[700] as string,
      downloadFX: handleDownloadReportExcel,
    },
  ];

  const text = <span>{t(`balance.download-text`)}</span>;

  return (
    <RightBarContainer
      title={`${t(`commons.report-of`)} ${t(
        `left-menu.${moduleName}`,
      ).toLocaleLowerCase()}`}
      data-testid="download_list_option">
      <Container>
        {moduleName === 'balance' ? (
          <Alert
            text={text}
            iconType="500"
            textType="700"
            Icon={InfoIcon}
            textVariant="Small"
          />
        ) : null}
        {downloadOptions.map(item => (
          <DownloadListItem key={item.text} {...item} />
        ))}
      </Container>
    </RightBarContainer>
  );
};
