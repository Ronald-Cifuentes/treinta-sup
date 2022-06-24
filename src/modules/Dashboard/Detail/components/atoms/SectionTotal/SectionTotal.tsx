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

  const formatt = (value: number): string => {
    const valueAux = String(value).replace(/\D/g, '');
    const inputValue = valueAux.replace('.', '').split('').reverse().join(''); // reverse
    let newValue = '';
    for (let i = 0; i < inputValue.length; i++) {
      if (i % 3 === 0) {
        newValue += '.';
      }
      newValue += inputValue[i];
    }
    return `$ ${newValue.split('').reverse().join('').slice(0, -1)}`;
  };

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
            value={formatt(data?.value || 0)}
            disabled
          />
        </SectionTotalWrapper>
        <SectionTotalWrapper>
          <InputBase
            autoFocus
            label={t('detail-orders.section-total.discount-value')}
            placeholder=""
            rounded="lg"
            value={formatt(data?.appliedDiscount || 0)}
          />
        </SectionTotalWrapper>
        <SectionTotalWrapper>
          <InputBase
            autoFocus
            label={t('detail-orders.section-total.total-value')}
            placeholder=""
            rounded="lg"
            value={formatt(data?.productsValue || 0)}
            disabled
          />
        </SectionTotalWrapper>
      </SectionTotalLayout>
    </SectionTotalContainer>
  );
};
