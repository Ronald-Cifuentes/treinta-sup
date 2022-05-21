import {FC} from 'react';
import {BrowseIcon} from '@30sas/web-ui-kit-icons';
import {useTranslation, Trans} from 'react-i18next';
import {TreintaTheme} from '@30sas/web-ui-kit-theme';
import {Grid, Typography} from '@30sas/web-ui-kit-core';

export const EmptySearch: FC<{search?: string}> = ({search = ''}) => {
  const {t} = useTranslation();

  return (
    <Grid
      item
      xs={12}
      style={{
        marginTop: TreintaTheme.utils.spacing(2),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
      }}>
      <BrowseIcon
        fill={TreintaTheme.colors.gray[600]}
        width="56px"
        height="56px"
      />

      <Typography
        color="gray"
        colorType="800"
        variant="Medium"
        margin={TreintaTheme.utils.spacing(6, 0, 2, 0)}>
        <Trans
          defaults={t('empty-search.text', {search})}
          components={{bold: <strong />}}
        />
      </Typography>
    </Grid>
  );
};
