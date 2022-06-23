import {FC} from 'react';
import {InputBase} from '@30sas/web-ui-kit-core';
import {useTranslation} from 'react-i18next';
import {
  SectionOriginContainer,
  SectionOriginLayoutInputs,
  SectionOriginSubTitle,
  SectionOriginWrapperInputs,
} from './SectionOrigin.styled';
import {SectionOriginProps} from './types';

export const SectionOrigin: FC<SectionOriginProps> = ({data}) => {
  const {t} = useTranslation();
  return (
    <SectionOriginContainer data-testid="section-origin">
      <SectionOriginSubTitle>
        {t('detail-orders.section-origin.subtitle')}
      </SectionOriginSubTitle>
      <SectionOriginLayoutInputs>
        <SectionOriginWrapperInputs>
          <InputBase
            autoFocus
            label={t('detail-orders.section-origin.direction')}
            placeholder=""
            rounded="lg"
            value={`${data?.products?.[0]?.warehouseAddress || ''}`}
            disabled
          />
        </SectionOriginWrapperInputs>
        <SectionOriginWrapperInputs>
          <InputBase
            autoFocus
            label={t('detail-orders.section-origin.store')}
            placeholder=""
            rounded="lg"
            value={`${data?.products?.[0]?.warehouseName || ''}`}
            disabled
          />
        </SectionOriginWrapperInputs>
      </SectionOriginLayoutInputs>
    </SectionOriginContainer>
  );
};
