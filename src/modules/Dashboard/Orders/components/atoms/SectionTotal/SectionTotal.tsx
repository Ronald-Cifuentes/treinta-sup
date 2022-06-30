import {FC, useEffect, useState} from 'react';
import {InputBase} from '@30sas/web-ui-kit-core';
import {useTranslation} from 'react-i18next';
import {
  SectionTotalContainer,
  SectionTotalLayout,
  SectionTotalSubTitle,
  SectionTotalWrapper,
} from './SectionTotal.styled';
import {SectionTotalProps} from './types';
import {formatt} from './SectionTotal.func';

export const SectionTotal: FC<SectionTotalProps> = ({data}) => {
  const {t} = useTranslation();
  const [discountValue, setDiscountValue] = useState<string>('');

  useEffect(() => {
    setDiscountValue(formatt(data?.appliedDiscount || 0));
  }, [data, setDiscountValue]);

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
            value={formatt(data?.productsValue || 0)}
            disabled
          />
        </SectionTotalWrapper>
        <SectionTotalWrapper>
          <InputBase
            autoFocus
            label={t('detail-orders.section-total.discount-value')}
            placeholder=""
            rounded="lg"
            onChange={e => setDiscountValue(e.target.value)}
            value={discountValue}
          />
        </SectionTotalWrapper>
        <SectionTotalWrapper>
          <InputBase
            autoFocus
            label={t('detail-orders.section-total.total-value')}
            placeholder=""
            rounded="lg"
            value={formatt(data?.value || 0)}
            disabled
          />
        </SectionTotalWrapper>
      </SectionTotalLayout>
    </SectionTotalContainer>
  );
};
