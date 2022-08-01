import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {WarningIcon} from '@30sas/web-ui-kit-icons';
import {Box, Popup, Typography, Button} from '@30sas/web-ui-kit-core';

import {GenericProps} from './types';

export const GenericModal: FC<GenericProps> = ({
  openModal,
  onCloseModal,
  onConfirm,
  items,
  title,
  subtitle,
  children,
  PopupProps,
  dataTestId,
  dataTestIdContinueButton,
  dataTestIdBackButton,
}) => {
  const {t} = useTranslation();
  return (
    <Popup
      open={openModal}
      onClose={onCloseModal}
      width="312px"
      dataTestId={dataTestId}
      {...PopupProps}>
      <Box
        width="100%"
        display="flex"
        alignItems="center"
        flexDirection="column">
        <WarningIcon width="50px" height="50px" />
        <Typography
          variant="XLargebold"
          margin="8px 0"
          color="secondary"
          colorType="700"
          textAlign="center">
          {title}
        </Typography>
        <Typography
          variant="Medium"
          margin="8px 0"
          color="secondary"
          colorType="700"
          textAlign="center">
          {subtitle}
        </Typography>
        {children}
        <Box display="flex" justifyContent="space-evenly" width="100%">
          <Button
            upper={false}
            borderColor="secondary"
            borderColorType="700"
            color="neutrals"
            colorType="100"
            hoverColor="secondary"
            hoverColorType="100"
            label={t('commons.yes-continue')}
            rounded="xl"
            size="medium"
            textColor="secondary"
            textColorType="700"
            textVariant="Smallbold"
            variant="secondary"
            onClick={() => (items ? onConfirm(items) : onConfirm([]))}
            dataTestId={dataTestIdContinueButton}
          />
          <Button
            upper={false}
            rounded="xl"
            size="medium"
            label={t('commons.go-back')}
            variant="primary"
            textVariant="Mediumbold"
            onClick={onCloseModal}
            dataTestId={dataTestIdBackButton}
          />
        </Box>
      </Box>
    </Popup>
  );
};
