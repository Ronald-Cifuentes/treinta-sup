/* eslint-disable complexity */
import {Divider, DrawerLeft} from '@30sas/web-ui-kit-core';
import {
  FaqIcon,
  DetailIcon,
  DocumentIcon,
  PackageIcon,
  LogoutBracketIcon,
} from '@30sas/web-ui-kit-icons';
import {FC, useState} from 'react';
import {useTranslation} from 'react-i18next';

import {LanguagesMap} from 'config/constants';
import {ROUTES} from 'routes/types';
import {useAuth} from 'context/AuthContext';
import {LogoTreinta} from 'components/atoms';
import {SUPPORT_LINK} from 'config/constants/parameters';
import {useRoutes} from 'hooks';

import {CloseSession} from '../atoms/CloseSession';
import {LinkButton} from '../molecules/LinkButton/LinkButton';
import {Box, Gap} from './LeftMenu.styled';

interface ILeftMenuProps {
  mobileOpen: boolean;
  onDrawerToggle: () => void;
}

export const LeftMenu: FC<ILeftMenuProps> = ({mobileOpen, onDrawerToggle}) => {
  const {logOut} = useAuth();
  const {t, i18n} = useTranslation();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleCloseSessionModal = (): void => setOpenModal(false);
  const handleConfirm = async (): Promise<void> => await logOut();

  const {getI18nRoute} = useRoutes();

  return (
    <>
      <DrawerLeft mobileOpen={mobileOpen} onClose={onDrawerToggle}>
        <a href={getI18nRoute(ROUTES.ORDERS)}>
          <LogoTreinta isSmall />
        </a>
        <Box margin="32px 0">
          <LinkButton
            icon={DocumentIcon}
            label={t('left-menu.orders')}
            href={ROUTES.ORDERS}
          />
          <LinkButton
            icon={PackageIcon}
            label={t('left-menu.inventory')}
            href={ROUTES.INVENTORY}
          />
        </Box>
        <Gap />
        <Divider />
        <LinkButton
          icon={FaqIcon}
          label={t('left-menu.support')}
          externalLink={SUPPORT_LINK}
          labelColorTypes="700"
          target="_blank"
        />
        <LinkButton
          icon={DetailIcon}
          label={t('left-menu.terms')}
          externalLink={LanguagesMap[i18n.language].TERMS_AND_CONDITIONS}
          labelColorTypes="700"
          target="_blank"
        />
        <LinkButton
          icon={LogoutBracketIcon}
          label={t('left-menu.logout')}
          labelColors="danger"
          labelColorTypes="500"
          onClick={() => setOpenModal(true)}
        />
      </DrawerLeft>
      <CloseSession
        openModal={openModal}
        onCloseModal={handleCloseSessionModal}
        onConfirm={handleConfirm}
      />
    </>
  );
};
