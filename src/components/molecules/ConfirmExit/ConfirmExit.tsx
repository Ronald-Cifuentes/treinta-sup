import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {Grid, Button} from '@30sas/web-ui-kit-core';

import {RightBarContainer} from 'components/molecules';
import {useDashboard} from 'context/DashboardContext';

import {
  Text,
  Title,
  WarningIcon,
  ContentRightBar,
  ButtonsContainer,
  ElementsContainer,
} from './ConfirmExit.styled';
import {ConfirmExitProps} from './types';

export const ConfirmExit: FC<ConfirmExitProps> = ({textKeepButton}) => {
  const {t} = useTranslation();
  const {
    params: {actions},
    rightBarNavigation: {goBack},
  } = useDashboard();

  return (
    <ContentRightBar>
      <RightBarContainer title="">
        <Grid item xs={12}>
          <ElementsContainer>
            <WarningIcon />
            <Title color="secondary" colorType="700" variant="Largebold">
              {t('confirm-exit.title')}
            </Title>
            <Text color="neutrals" colorType="800" variant="Medium">
              {t('confirm-exit.text')}
            </Text>
            <ButtonsContainer>
              <Button
                borderColor="secondary"
                borderColorType="700"
                color="neutrals"
                colorType="100"
                hoverColor="secondary"
                hoverColorType="100"
                label={t('confirm-exit.exit-button-label')}
                rounded="xl"
                size="medium"
                textColor="secondary"
                textColorType="700"
                textVariant="Mediumbold"
                variant="secondary"
                fullWidth
                upper={false}
                onClick={actions && actions[0]}
              />
              <Button
                label={
                  textKeepButton ?? t('confirm-exit.keep-editing-button-label')
                }
                rounded="xl"
                size="medium"
                textColor="primary"
                textColorType="900"
                textVariant="Mediumbold"
                variant="primary"
                fullWidth
                upper={false}
                onClick={() => goBack({})}
              />
            </ButtonsContainer>
          </ElementsContainer>
        </Grid>
      </RightBarContainer>
    </ContentRightBar>
  );
};
