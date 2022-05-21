import {FC, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {DeleteIcon} from '@30sas/web-ui-kit-icons';
import {Button, Grid, Typography} from '@30sas/web-ui-kit-core';

import {useTheme} from 'hooks';
import {useDashboard} from 'context/DashboardContext/DashboardContext';

import {DeleteTypes} from './confirmDeleteTypes';
import {ButtonsContainer} from './ConfirmDeleteContainer.styled';

export const ConfirmDeleteContainer: FC<DeleteTypes> = ({
  textConfirm,
  rightBarType,
  deletionQuestionText,
}) => {
  const [disableButton, setDisableButton] = useState(false);
  const {params, rightBarNavigation, setRightBarOpen} = useDashboard();
  const {goBack} = rightBarNavigation;
  const {actions} = params;
  const {t} = useTranslation();
  const theme = useTheme();

  const handleClick = (): void => {
    if (rightBarType == 'navigationRightBar') {
      return goBack();
    }
    return setRightBarOpen(false);
  };

  return (
    <Grid
      item
      xs={12}
      style={{
        marginTop: theme.utils.spacing(2),
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        textAlign: 'center',
      }}>
      <DeleteIcon fill={theme.colors.danger[500]} width="56px" height="56px" />

      <Typography
        color="secondary"
        colorType="700"
        variant="Largebold"
        margin={theme.utils.spacing(6, 0, 2, 0)}>
        {deletionQuestionText}
      </Typography>

      <Typography
        color="gray"
        colorType="800"
        variant="Medium"
        margin={theme.utils.spacing(2, 0)}>
        {textConfirm}
      </Typography>

      <ButtonsContainer>
        <Button
          label={t('confirm-delete.delete-button-label')}
          rounded="xl"
          textColor="danger"
          textColorType="500"
          fullWidth
          upper={false}
          size="medium"
          textVariant="Mediumbold"
          transparent
          hoverColor="danger"
          hoverColorType="100"
          onClick={() => {
            actions && actions[0]();
            setDisableButton(true);
          }}
          loading={disableButton}
          disabled={disableButton}
        />
        <Button
          label={t('confirm-delete.return-button-label')}
          rounded="xl"
          size="medium"
          textColor="primary"
          textColorType="900"
          textVariant="Mediumbold"
          fullWidth
          disabled={false}
          upper={false}
          onClick={handleClick}
        />
      </ButtonsContainer>
    </Grid>
  );
};
