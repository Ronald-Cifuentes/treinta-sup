import {FC} from 'react';
import {useLocation} from 'react-router-dom';
import {ActionButtonLink} from '@30sas/web-ui-kit-core';
import {ThemeColors, GradientColor} from '@30sas/web-ui-kit-theme';

import {useRoutes, useNavigateI18n} from 'hooks';

import {LinkButtonProps} from './types';
import {Line} from './LinkButton.styled';

export const LinkButton: FC<LinkButtonProps> = ({
  icon,
  label,
  href,
  externalLink,
  disabled = false,
  variant = 'Small',
  width = '100%',
  colorBg = 'neutrals',
  colorBgType = '100',
  labelColorTypes = '800',
  labelColors = 'gray',
  margin = '4px 0',
  padding = '8px 0',
  marginIcon = '0 16px 0 8px',
  onClick = (): void => undefined,
  target,
}) => {
  const backgroundColor = colorBg as keyof ThemeColors;
  const backgroundColorType = colorBgType as GradientColor;
  const {getI18nRoute} = useRoutes();
  const {pathname} = useLocation();
  const [, path] = href ? getI18nRoute(href).split('/') : '';
  const navigate = useNavigateI18n();

  const redirectTo = (): void => {
    if (disabled || externalLink) {
      return;
    } else {
      onClick();
      href && navigate(href as string);
    }
  };

  if (path && pathname.includes(path)) {
    return (
      <span>
        <Line data-testid="dashboard_linkButton_line" />
        <ActionButtonLink
          icon={icon}
          colorBg="primary"
          colorBgType="200"
          label={label}
          marginIcon={marginIcon}
          colorIcon="secondary"
          hoverColorBg="primary"
          hoverColorBgType="200"
          colorIconType="700"
          justifyContent="flex-start"
          onClick={redirectTo}
          href={externalLink}
          labelVariant="Smallbold"
          width={width}
          padding={padding}
          margin={margin}
          labelColorTypes={labelColorTypes as GradientColor}
          labelColors={labelColors as keyof ThemeColors}
          target={target}
        />
      </span>
    );
  } else if (disabled) {
    return (
      <ActionButtonLink
        icon={icon}
        colorBg={backgroundColor}
        colorBgType={backgroundColorType}
        label={label}
        marginIcon={marginIcon}
        colorIcon="gray"
        colorIconType="600"
        justifyContent="flex-start"
        labelVariant={variant}
        width={width}
        padding={padding}
        labelColorTypes="600"
        labelColors="gray"
      />
    );
  } else {
    return (
      <ActionButtonLink
        icon={icon}
        colorBg={backgroundColor}
        colorBgType={backgroundColorType}
        label={label}
        marginIcon={marginIcon}
        colorIcon={labelColors as keyof ThemeColors}
        colorIconType={labelColorTypes as GradientColor}
        justifyContent="flex-start"
        labelVariant={variant}
        onClick={redirectTo}
        width={width}
        href={externalLink}
        padding={padding}
        margin={margin}
        labelColorTypes={labelColorTypes as GradientColor}
        labelColors={labelColors as keyof ThemeColors}
        target={target}
      />
    );
  }
};
