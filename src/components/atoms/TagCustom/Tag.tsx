import {FC, useState} from 'react';
import {InfoIcon, CloseFilledIcon} from '@30sas/web-ui-kit-icons';

import {ContainerTag} from './types';
import {Container, Text} from './styles';

export const Tag: FC<ContainerTag> = ({
  iconLeft: IconLeft = InfoIcon,
  iconExit: IconExit = CloseFilledIcon,
  iconExitActive = false,
  iconLeftActive = false,
  size = 'small',
  variant = 'default',
  label: Label,
  justifyContent = 'center',
  className,
}) => {
  const [visibility, setVisibility] = useState(true);
  return (
    <Container
      show={visibility}
      className={className}
      size={size}
      variant={variant}
      justifyContent={justifyContent}>
      {iconLeftActive && <IconLeft />}
      <Text variants={variant} size={size}>
        {Label}
      </Text>
      {iconExitActive && (
        <IconExit
          onClick={() => setVisibility(false)}
          style={{cursor: 'pointer'}}
        />
      )}
    </Container>
  );
};
