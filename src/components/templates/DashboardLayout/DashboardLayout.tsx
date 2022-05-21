import {FC, useState} from 'react';
import {AppBar, LeftBar, RightBar} from '@30sas/web-ui-kit-core';

import {ToastLocations} from 'config/constants';
import {Layout} from 'components/templates/Layout';
import {SharedRightBar} from 'components/organisms';
import {useDashboard} from 'context/DashboardContext';
import {useToast} from 'context/ToastContext/ToastContext';

import {
  Title,
  ToastContent,
  HeaderContainer,
  ContentContainer,
  HeaderLeftContainer,
  HeaderRightContainer,
  BottomToastContainer,
} from './Dashboard.styled';
import {DashboardLayoutProps} from './types';
import {LeftMenuLoad} from './organisms/LeftMenu.load';

export const DashboardLayout: FC<DashboardLayoutProps> = ({
  title,
  children,
  LeftOptions,
  fancyLineProps,
  sizeFancyLine = '4px',
  withoutPadding = false,
  RightBar: RightBarContent = () => null,
}) => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const {baseColor, gradient} = fancyLineProps;
  const {Toast} = useToast();
  const {rightBarOpen, params} = useDashboard();
  const withPadding = !params?.removePadding;

  const handleDrawerToggle = (): void => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <Layout>
      <RightBar
        isOpen={rightBarOpen}
        withPadding={withPadding}
        width="25vw"
        borderBox={params.borderBox}>
        <SharedRightBar />
        <RightBarContent />
        <BottomToastContainer $withPadding={withPadding}>
          <Toast location={ToastLocations.RIGHTBAR} />
        </BottomToastContainer>
      </RightBar>
      <LeftBar>
        <LeftMenuLoad
          mobileOpen={mobileOpen}
          onDrawerToggle={handleDrawerToggle}
        />
        <AppBar
          onClose={handleDrawerToggle}
          colorFancyLine={baseColor}
          colorTypeFancyLine={gradient}
          sizeFancyLine={sizeFancyLine}>
          <HeaderContainer>
            <HeaderRightContainer xs={5} md={6}>
              <Title variant="XXLargebold" color="secondary" colorType="700">
                {title}
              </Title>
            </HeaderRightContainer>
            {LeftOptions && (
              <HeaderLeftContainer xs={7} md={6}>
                <LeftOptions />
              </HeaderLeftContainer>
            )}
          </HeaderContainer>
        </AppBar>
        <ContentContainer
          component="main"
          sx={{flexGrow: 1}}
          $withoutPadding={withoutPadding}>
          {children}
        </ContentContainer>
      </LeftBar>
      <ToastContent>
        <Toast location={ToastLocations.GENERAL} />
      </ToastContent>
    </Layout>
  );
};
