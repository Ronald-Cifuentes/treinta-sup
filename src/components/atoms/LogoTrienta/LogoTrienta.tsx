import {FC, useMemo} from 'react';
import {useTranslation} from 'react-i18next';
import {Tag} from '@30sas/web-ui-kit-core';

import {LanguagesMap} from 'config/constants';

import {LogoTreintaProps} from './types';
import {LogoContainer} from './LogoTrienta.styled';

export const LogoTreinta: FC<LogoTreintaProps> = ({
  isSmall = false,
  withMargin = false,
  disabledBeta = false,
}) => {
  const {i18n} = useTranslation();

  const TreintaLogo = useMemo(
    () => LanguagesMap[i18n.language].TREINTA_LOGO,
    [],
  );

  return (
    <LogoContainer $withMargin={withMargin} $isSmall={isSmall}>
      <TreintaLogo />
      {!disabledBeta && <Tag variant="default" label="Proveedores" />}
    </LogoContainer>
  );
};
