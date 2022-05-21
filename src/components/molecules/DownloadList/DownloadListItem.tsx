import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {TreintaTheme} from '@30sas/web-ui-kit-theme';
import {Grid, Typography} from '@30sas/web-ui-kit-core';

import {useToast} from 'context/ToastContext/ToastContext';
import {LogProvider} from 'providers/log-provider';
import {useDashboard} from 'context/DashboardContext/DashboardContext';

import {DownloadListItemProps} from './types';
import {HoverContainer} from './DownloadListItem.styled';

export const DownloadListItem: FC<DownloadListItemProps> = ({
  text,
  Icon,
  color,
  downloadFX,
  disabled = false,
}) => {
  const {setRightBarOpen} = useDashboard();
  const closeRightBar = (): void => setRightBarOpen(false);
  const {setLabel, setOpen, setSeverity} = useToast();
  const iconColor = disabled ? 'gray' : color;
  const {t} = useTranslation();

  const handleClick = async (): Promise<void> => {
    closeRightBar();
    try {
      const response = await downloadFX();
      const url = response?.data?.filePath;
      if (url) {
        window.location.href = url;
        setLabel(t('balance.download-success'));
        setSeverity('success');
      }
    } catch (error) {
      LogProvider.getInstance().logError({
        error: error as Error,
        name: 'DOWNLOAD_REPORT_ERROR',
      });
      setLabel(t('balance.download-error'));
      setSeverity('danger');
    } finally {
      setOpen(true);
    }
  };

  return (
    <Grid
      item
      xs={12}
      sx={{padding: TreintaTheme.utils.spacing(2, 0, 0, 2)}}
      data-testid="download_listItem_option">
      <HoverContainer disabled={disabled} onClick={handleClick}>
        <Icon fill={iconColor} width="24px" height="24px" />
        <Typography
          color="gray"
          colorType="800"
          variant="Medium"
          margin={TreintaTheme.utils.spacing(0, 0, 0, 4)}>
          {text}
        </Typography>
      </HoverContainer>
    </Grid>
  );
};
