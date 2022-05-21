import {FC, ReactElement} from 'react';

import {TreintaTheme} from '@30sas/web-ui-kit-theme';
import {BlueArrowUpIcon, CloseFilledIcon} from '@30sas/web-ui-kit-icons';
import {Grid, FancyLine, Typography} from '@30sas/web-ui-kit-core';

import {useDashboard} from 'context/DashboardContext/DashboardContext';

import {
  HeaderRow,
  HeaderLine,
  IconContainer,
  HeaderContainer,
  BackIconContainer,
} from './RigthBar.styled';

export const RightBarTitleHeader: FC<{
  title: string;
  lineColor: string;
  icon: ReactElement;
  lineColorType: string;
  dataTestId?: string;
}> = ({title, icon, lineColor, lineColorType}) => {
  const {setRightBarOpen, rightBarNavigation} = useDashboard();
  const closeRightBar = (): void => {
    setRightBarOpen(false);
    window.localStorage.removeItem('products_select');
  };

  const haveBackScreen = rightBarNavigation?.canGoBack();

  const Title: FC = () => (
    <HeaderContainer>
      <Grid item xs={11}>
        <HeaderRow>
          {haveBackScreen ? (
            <BackIconContainer>
              <BlueArrowUpIcon
                style={{
                  transform: 'rotate(-90deg)',
                }}
                width="24px"
                height="24px"
                onClick={() => rightBarNavigation?.goBack()}
              />
            </BackIconContainer>
          ) : (
            icon
          )}
          <Typography
            colorType="700"
            color="secondary"
            variant="Largebold"
            margin="0 0 0 16px">
            {title}
          </Typography>
        </HeaderRow>
      </Grid>
      <Grid item xs={1} onClick={closeRightBar} pl={0}>
        <IconContainer>
          <CloseFilledIcon
            width="24px"
            height="24px"
            fill={TreintaTheme.colors.secondary[700]}
          />
        </IconContainer>
      </Grid>
    </HeaderContainer>
  );

  return (
    <>
      <HeaderRow>
        <Title />
      </HeaderRow>
      <HeaderLine>
        <FancyLine color={lineColor} colorType={lineColorType} />
      </HeaderLine>
    </>
  );
};
