import {FC} from 'react';
import {InputBase} from '@30sas/web-ui-kit-core';
import {useTranslation} from 'react-i18next';
import {
  SectionTotalContainer,
  SectionTotalLayout,
  SectionTotalSubTitle,
  SectionTotalWrapper,
} from './SectionTotal.styled';
import {SectionTotalProps} from './types';

export const SectionTotal: FC<SectionTotalProps> = ({data}) => {
  const {t} = useTranslation();
  return (
    <SectionTotalContainer data-testid="section-total">
      <SectionTotalSubTitle>
        {t('detail-orders.section-total.subtitle')}
      </SectionTotalSubTitle>
      <SectionTotalLayout>
        <SectionTotalWrapper>
          <InputBase
            autoFocus
            label={t('detail-orders.section-total.base-value')}
            placeholder=""
            rounded="lg"
            value={`${data?.productsValue}`}
            disabled
          />
        </SectionTotalWrapper>
        <SectionTotalWrapper>
          <InputBase
            autoFocus
            label={t('detail-orders.section-total.discount-value')}
            placeholder=""
            rounded="lg"
            value={`${data?.appliedDiscount}`}
          />
        </SectionTotalWrapper>
        <SectionTotalWrapper>
          <InputBase
            autoFocus
            label={t('detail-orders.section-total.total-value')}
            placeholder=""
            rounded="lg"
            value={`${data?.value}`}
            disabled
          />
        </SectionTotalWrapper>
      </SectionTotalLayout>
    </SectionTotalContainer>
  );
};
