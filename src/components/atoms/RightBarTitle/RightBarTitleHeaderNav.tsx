import {FC} from 'react';

import {BlueArrowUpIcon} from '@30sas/web-ui-kit-icons';
import {Grid, Typography} from '@30sas/web-ui-kit-core';

import {useDashboard} from 'context/DashboardContext/DashboardContext';

import {HeaderRow, HeaderContainer} from './RigthBar.styled';

export const RightBarTitleNav: FC<{
  title: string;
}> = ({title}) => {
  const {rightBarNavigation} = useDashboard();
  const {goBack} = rightBarNavigation;

  const handleClick = (): void => goBack();

  const Title: FC = () => (
    <HeaderContainer>
      <Grid item xs={1} onClick={handleClick} pl={0} pr={1}>
        <BlueArrowUpIcon
          style={{
            transform: 'rotate(-90deg)',
          }}
          width="24px"
          height="24px"
        />
      </Grid>
      <Grid item xs={11}>
        <Typography
          color="secondary"
          colorType="700"
          variant="Largebold"
          margin="0 0 0 16px">
          {title}
        </Typography>
      </Grid>
    </HeaderContainer>
  );

  return (
    <HeaderRow>
      <Title />
    </HeaderRow>
  );
};
