import {FC} from 'react';
import {TreintaTheme} from '@30sas/web-ui-kit-theme';
import {Grid, Typography} from '@30sas/web-ui-kit-core';
import {CloseFilledIcon, BlueArrowUpIcon} from '@30sas/web-ui-kit-icons';

import {useDashboard} from 'context/DashboardContext';

import {RightBarTitleProps} from './types';

export const RightBarTitle: FC<RightBarTitleProps> = ({
  title,
  onBeforeExit,
  dataTestIdBackButton,
  dataTestIdCloseButton,
}) => {
  const {setRightBarOpen, rightBarNavigation} = useDashboard();
  const {canGoBack, goBack} = rightBarNavigation;
  const closeRightBar = (): void => {
    if (onBeforeExit) {
      onBeforeExit(() => setRightBarOpen(false));
      return;
    }
    setRightBarOpen(false);
  };
  const haveBackScreen = canGoBack();

  const Title: FC = () => (
    <Grid item xs={11}>
      <Typography
        color="secondary"
        colorType="700"
        variant="XLargebold"
        style={{
          marginLeft: haveBackScreen ? TreintaTheme.utils.spacing(4) : 0,
        }}
        margin="0">
        {title}
      </Typography>
    </Grid>
  );

  const handleClick = (): void => {
    if (onBeforeExit) {
      onBeforeExit(goBack);
      return;
    }
    goBack();
  };

  if (haveBackScreen) {
    return (
      <>
        <Grid
          item
          xs={1}
          pl={0}
          pr={1}
          onClick={handleClick}
          data-testid={dataTestIdBackButton}>
          <BlueArrowUpIcon
            style={{
              transform: 'rotate(-90deg)',
            }}
            width="24px"
            height="24px"
          />
        </Grid>
        <Title />
      </>
    );
  }

  return (
    <>
      <Title />
      <Grid
        item
        xs={1}
        pl={0}
        onClick={closeRightBar}
        data-testid={dataTestIdCloseButton}>
        <CloseFilledIcon width="24px" height="24px" />
      </Grid>
    </>
  );
};
