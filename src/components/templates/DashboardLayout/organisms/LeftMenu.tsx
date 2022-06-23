/* eslint-disable complexity */
import {Divider, DrawerLeft} from '@30sas/web-ui-kit-core';
import {
  FaqIcon,
  DocumentIcon,
  PackageIcon,
  LogoutBracketIcon,
  StarsProfileIcon,
} from '@30sas/web-ui-kit-icons';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import {FC, useState} from 'react';
import {useTranslation} from 'react-i18next';

import {ROUTES} from 'routes/types';
import {useAuth} from 'context/AuthContext';
import {LogoTreinta} from 'components/atoms';
import {SUPPORT_LINK} from 'config/constants/parameters';

import {getUser} from 'utils/infoUser';
import {CloseSession} from '../atoms/CloseSession';
import {LinkButton} from '../molecules/LinkButton/LinkButton';
import {
  Box,
  Gap,
  SubtitleSidebar,
  UserBox,
  UserIcon,
  UserName,
} from './LeftMenu.styled';
interface ILeftMenuProps {
  mobileOpen: boolean;
  onDrawerToggle: () => void;
}

export const LeftMenu: FC<ILeftMenuProps> = ({mobileOpen, onDrawerToggle}) => {
  const {logOut} = useAuth();
  const {t} = useTranslation();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleCloseSessionModal = (): void => setOpenModal(false);
  const handleConfirm = async (): Promise<void> => await logOut();

  const user = getUser();

  return (
    <>
      <DrawerLeft mobileOpen={mobileOpen} onClose={onDrawerToggle}>
        <LogoTreinta isSmall />
        <UserBox>
          <UserIcon>
            <AccountCircleIcon sx={{width: '100%', height: '100%'}} />
          </UserIcon>
          <UserName>{user?.name?.slice(0, 20)}</UserName>
        </UserBox>

        <SubtitleSidebar>Gestiona tus ventas</SubtitleSidebar>

        <Box>
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

        <SubtitleSidebar>{t('left-menu.manageContacts')}</SubtitleSidebar>

        <div>
          <LinkButton
            icon={StarsProfileIcon}
            label={t('left-menu.clients')}
            externalLink=""
            labelColorTypes="700"
            target="_blank"
          />
        </div>

        <Gap />

        <Divider />

        <LinkButton
          icon={FaqIcon}
          label={t('left-menu.help')}
          externalLink={SUPPORT_LINK}
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
