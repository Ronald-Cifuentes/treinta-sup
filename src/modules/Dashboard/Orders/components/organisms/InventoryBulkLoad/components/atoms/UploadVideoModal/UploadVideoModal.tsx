import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {CloseFilledIcon} from '@30sas/web-ui-kit-icons';
import {Box, Popup, Typography} from '@30sas/web-ui-kit-core';

import {LanguagesMap} from 'config/constants';

import {ButtonStyled} from '../../../InventoryBulkLoad.styled';
import {List, YoutubeVideo} from './UploadVideoModal.styled';

import {Props} from './types';

export const UploadVideoModal: FC<Props> = ({openModal, onCloseModal}) => {
  const {t, i18n} = useTranslation();
  return (
    <Popup
      open={openModal}
      onClose={onCloseModal}
      hideCloseButton
      width="712px"
      padding="20px 32px 32px 32px">
      <Box width="100%" mb="16px" display="flex" alignItems="center">
        <Typography
          variant="XXLargebold"
          margin="0"
          color="secondary"
          colorType="700"
          style={{flexGrow: 1}}>
          {t('bulk-upload.tutorial.title')}
        </Typography>
        <CloseFilledIcon width={30} height={30} onClick={onCloseModal} />
      </Box>
      <YoutubeVideo
        width="100%"
        height="402px"
        src={`https://www.youtube.com/embed/${
          LanguagesMap[i18n.language].YID_VIDEO_UPLOAD_BULK
        }`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{borderRadius: 16}}
      />
      <Box width="100%">
        <List>
          <li>{t('bulk-upload.tutorial.message-one')}</li>
          <li>{t('bulk-upload.tutorial.message-two')}</li>
          <li>{t('bulk-upload.tutorial.message-three')}</li>
          <li>{t('bulk-upload.tutorial.message-four')}</li>
          <li>{t('bulk-upload.tutorial.message-five')}</li>
          <li>{t('bulk-upload.tutorial.message-six')}</li>
        </List>
      </Box>
      <Box display="flex" justifyContent="center">
        <ButtonStyled
          upper={false}
          rounded="xl"
          size="medium"
          label={t('bulk-upload.tutorial.understood')}
          variant="primary"
          textVariant="Mediumbold"
          margin="0"
          onClick={onCloseModal}
        />
      </Box>
    </Popup>
  );
};
