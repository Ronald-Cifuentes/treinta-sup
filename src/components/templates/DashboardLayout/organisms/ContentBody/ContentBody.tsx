import {AppBar} from '@30sas/web-ui-kit-core';
import {FC, ReactElement} from 'react';
import {useLocation} from 'react-router-dom';
import {
  ContentContainer,
  HeaderContainer,
  HeaderLeftContainer,
  HeaderRightContainer,
  Title,
} from './ContentBody.styled';
import {ContentBodyProps} from './types';

export const ContentBody: FC<ContentBodyProps> = ({
  handleDrawerToggle,
  baseColor,
  gradient,
  sizeFancyLine,
  title,
  LeftOptions,
  withoutPadding,
  children,
}) => {
  const location = useLocation();

  switch (location?.pathname) {
    case '/ordenes':
      return (
        <>
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
        </>
      );
    default:
      return children as ReactElement;
  }
};
