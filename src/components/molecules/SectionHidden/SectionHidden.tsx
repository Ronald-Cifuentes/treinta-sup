import {FC, useState} from 'react';
import {Typography} from '@30sas/web-ui-kit-core';
import {DownLgIcon, UpLgIcon} from '@30sas/web-ui-kit-icons';

import {useTranslation} from 'react-i18next';
import {Container, Title} from './SectionHidden.styled';

export const SectionHidden: FC<{dataTestId?: string}> = ({
  children,
  dataTestId = 'default-section-hidden',
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const {t} = useTranslation();

  return (
    <>
      {isVisible ? children : null}
      <Container
        onClick={() => setIsVisible(!isVisible)}
        data-testid={dataTestId}>
        <Typography
          variant="Smallbold"
          margin="14px 2px 0 0"
          color="secondary"
          textAlign="right"
          colorType="700">
          {isVisible ? (
            <>
              <Title>{t('commons.hidden-aditional-information')}</Title>
              <UpLgIcon />
            </>
          ) : (
            <>
              <Title>{t('commons.show-aditional-information')}</Title>
              <DownLgIcon />
            </>
          )}
        </Typography>
      </Container>
    </>
  );
};
