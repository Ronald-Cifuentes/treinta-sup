import {FC} from 'react';
import {Button} from '@30sas/web-ui-kit-core';
import {WhatsappIcon} from '@30sas/web-ui-kit-icons';

import {useTheme} from 'hooks';

import {WhatsappButtonProps} from './types';
import {Container} from './WhatsappButton.styled';

export const WhatsappButton: FC<WhatsappButtonProps> = ({
  link,
  label,
  dataTestId = 'default_button_whatsApp',
}) => {
  const theme = useTheme();

  return (
    <Container data-testid={dataTestId}>
      <Button
        label={label}
        StartIcon={() => (
          <WhatsappIcon
            width={16}
            height={16}
            fill={theme.colors.neutrals[100]}
          />
        )}
        color="success"
        colorType="600"
        hoverColor="success"
        hoverColorType="500"
        size="medium"
        textColor="neutrals"
        textColorType="100"
        textVariant="Mediumbold"
        upper={false}
        onClick={() => {
          window.open(link, '_blank');
        }}
      />
    </Container>
  );
};
