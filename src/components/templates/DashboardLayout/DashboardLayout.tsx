import {LeftBar, RightBar} from '@30sas/web-ui-kit-core';
import {SharedRightBar} from 'components/organisms';
import {Layout} from 'components/templates/Layout';
import {ToastLocations} from 'config/constants';
import {useDashboard} from 'context/DashboardContext';
import {useToast} from 'context/ToastContext/ToastContext';
import {FC, useState} from 'react';
import {BottomToastContainer, ToastContent} from './Dashboard.styled';
import {LeftMenu} from './organisms/LeftMenu';
import {ContentBody} from './organisms/ContentBody';
import {DashboardLayoutProps} from './types';

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
      <RightBar isOpen={rightBarOpen} withPadding={withPadding} width="25vw">
        <SharedRightBar />
        <RightBarContent />
        <BottomToastContainer $withPadding={withPadding}>
          <Toast location={ToastLocations.RIGHTBAR} />
        </BottomToastContainer>
      </RightBar>
      <LeftBar>
        <LeftMenu mobileOpen={mobileOpen} onDrawerToggle={handleDrawerToggle} />
        <ContentBody
          {...{
            handleDrawerToggle,
            baseColor,
            gradient,
            sizeFancyLine,
            title,
            LeftOptions,
            withoutPadding,
            children,
          }}>
          {children}
        </ContentBody>
      </LeftBar>
      <ToastContent>
        <Toast location={ToastLocations.GENERAL} />
      </ToastContent>
    </Layout>
  );
};
