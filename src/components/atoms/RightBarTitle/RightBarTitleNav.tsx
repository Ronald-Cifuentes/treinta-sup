import {FC} from 'react';
import {TreintaTheme} from '@30sas/web-ui-kit-theme';
import {Grid, Typography} from '@30sas/web-ui-kit-core';
import {CloseFilledIcon, BlueArrowUpIcon} from '@30sas/web-ui-kit-icons';
import {useDashboard} from 'context/DashboardContext/DashboardContext';

export const RightBarTitleNav: FC<{
  title: string;
}> = ({title}) => {
  const {setRightBarOpen, rightBarNavigation, setParams} = useDashboard();
  const {canGoBack, goBack} = rightBarNavigation;
  const closeRightBar = (): void => setRightBarOpen(false);
  const haveBackScreen = canGoBack();

  const handleClick = (): void => goBack();

  const Title: FC = () => (
    <Grid item xs={11}>
      <Typography
        color="secondary"
        colorType="700"
        variant="Largebold"
        style={{
          marginLeft: haveBackScreen ? TreintaTheme.utils.spacing(4) : 0,
        }}
        margin="0">
        {title}
      </Typography>
    </Grid>
  );

  if (haveBackScreen) {
    return (
      <>
        <Grid
          item
          xs={1}
          onClick={() => {
            setParams({
              removePadding: true,
            });
          }}
          pl={0}
          pr={1}>
          <div onClick={handleClick}>
            <BlueArrowUpIcon
              style={{
                transform: 'rotate(-90deg)',
              }}
              width="24px"
              height="24px"
            />
          </div>
        </Grid>
        <Title />
      </>
    );
  }

  return (
    <>
      <Title />
      <Grid item xs={1} onClick={closeRightBar} pl={0}>
        <CloseFilledIcon width="24px" height="24px" />
      </Grid>
    </>
  );
};
