import {LanguagesMap} from 'config/constants';
import {FC, useMemo} from 'react';
import {useTranslation} from 'react-i18next';
import {Tag} from 'components/atoms/TagCustom/Tag';
import {LogoContainer} from './LogoTrienta.styled';
import {LogoTreintaProps} from './types';

export const LogoTreinta: FC<LogoTreintaProps> = ({
  isSmall = false,
  withMargin = false,
  disabledBeta = false,
}) => {
  const {i18n} = useTranslation();

  const TreintaLogo = useMemo(
    () => LanguagesMap[i18n.language].TREINTA_LOGO,
    [i18n.language],
  );

  return (
    <LogoContainer $withMargin={withMargin} $isSmall={isSmall}>
      <TreintaLogo />
      {!disabledBeta && <Tag variant="default" label="Proveedores" />}
    </LogoContainer>
  );
};
