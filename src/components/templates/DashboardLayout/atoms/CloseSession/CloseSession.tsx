import {FC} from 'react';
import {LogoutBracketIcon} from '@30sas/web-ui-kit-icons';
import {Popup, Typography, Button, Box} from '@30sas/web-ui-kit-core';

import {useTheme} from 'hooks';
import {useTranslation} from 'react-i18next';

interface Props {
  openModal: boolean;
  onCloseModal: () => void;
  onConfirm: () => void;
}

export const CloseSession: FC<Props> = ({
  openModal,
  onCloseModal,
  onConfirm,
}) => {
  const theme = useTheme();
  const {t} = useTranslation();
  return (
    <Popup open={openModal} onClose={onCloseModal} width="312px">
      <LogoutBracketIcon
        fill={theme.colors.gray[600]}
        width="50px"
        height="50px"
      />
      <Typography variant="Mediumbold">{t('logout.logout-alert')}</Typography>
      <Box display="flex" justifyContent="space-evenly" width="100%">
        <Button
          upper={false}
          borderColor="secondary"
          borderColorType="700"
          color="neutrals"
          colorType="100"
          hoverColor="secondary"
          hoverColorType="100"
          label={t('logout.yes')}
          rounded="xl"
          size="medium"
          textColor="secondary"
          textColorType="700"
          textVariant="Smallbold"
          variant="secondary"
          onClick={onConfirm}
        />
        <Button
          upper={false}
          rounded="xl"
          size="medium"
          label={t('logout.go-back')}
          variant="primary"
          textVariant="Mediumbold"
          onClick={onCloseModal}
        />
      </Box>
    </Popup>
  );
};
