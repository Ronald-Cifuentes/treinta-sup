/* eslint-disable complexity */
import {Divider, DrawerLeft} from '@30sas/web-ui-kit-core';
import {
  FaqIcon,
  PackageIcon,
  DocumentIcon,
  LogoutBracketIcon,
} from '@30sas/web-ui-kit-icons';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import {FC, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {LogoTreinta} from 'components/atoms';
import {SUPPORT_LINK} from 'config/constants/parameters';
import {useAuth} from 'context/AuthContext';
import {ROUTES} from 'routes/types';
import {EventProvider} from 'providers/event-provider';
import {getUser} from 'utils/infoUser';
import {CloseSession} from '../../atoms/CloseSession';
import {LinkButton} from '../../molecules/LinkButton/LinkButton';
import {
  Box,
  Gap,
  SubtitleSidebar,
  UserBox,
  UserIcon,
  UserName,
} from './LeftMenu.styled';
import {ILeftMenuProps} from './types';

export const LeftMenu: FC<ILeftMenuProps> = ({mobileOpen, onDrawerToggle}) => {
  const {logOut} = useAuth();
  const {t} = useTranslation();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const handleCloseSessionModal = (): void => setOpenModal(false);
  const handleConfirm = async (): Promise<void> => await logOut();

  const user = getUser();

  const showReport = process.env.REACT_APP_SHOW_DOWNLOAD_ORDERS;

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
        <SubtitleSidebar>{t('left-menu.subtitle')}</SubtitleSidebar>
        <Box>
          {showReport === 'true' && (
            <LinkButton
              //icon={DownLgIcon}
              icon={FileDownloadIcon}
              label={t('left-menu.reports')}
              href={ROUTES.REPORTS}
              onClick={() => {
                EventProvider.getInstance().logEventAmplitude(
                  `b2bs_navbar_action_selected`,
                  {
                    supplier: getUser()?.supplier,
                    action: t('left-menu.reports'),
                  },
                );
              }}
            />
          )}
          <LinkButton
            icon={DocumentIcon}
            label={t('left-menu.orders')}
            href={ROUTES.ORDERS}
            onClick={() => {
              EventProvider.getInstance().logEventAmplitude(
                `b2bs_navbar_action_selected`,
                {
                  supplier: getUser()?.supplier,
                  action: t('left-menu.orders'),
                },
              );
            }}
          />
          <LinkButton
            icon={PackageIcon}
            label={t('left-menu.inventory')}
            href={ROUTES.INVENTORY}
            onClick={() => {
              EventProvider.getInstance().logEventAmplitude(
                `b2bs_navbar_action_selected`,
                {
                  supplier: getUser()?.supplier,
                  action: t('left-menu.inventory'),
                },
              );
            }}
          />
        </Box>
        <Gap />
        <Divider />
        <div
          onClick={() => {
            EventProvider.getInstance().logEventAmplitude(
              `b2bs_navbar_action_selected`,
              {
                supplier: getUser()?.supplier,
                action: t('left-menu.help'),
              },
            );
          }}>
          <LinkButton
            icon={FaqIcon}
            label={t('left-menu.help')}
            externalLink={SUPPORT_LINK}
            labelColorTypes="700"
            target="_blank"
          />
        </div>
        <LinkButton
          icon={LogoutBracketIcon}
          label={t('left-menu.logout')}
          labelColors="danger"
          labelColorTypes="500"
          onClick={() => {
            EventProvider.getInstance().logEventAmplitude(
              `b2bs_navbar_action_selected`,
              {
                supplier: getUser()?.supplier,
                action: t('left-menu.logout'),
              },
            );
            setOpenModal(true);
          }}
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
