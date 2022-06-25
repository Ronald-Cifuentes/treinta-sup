import {InputBase} from '@30sas/web-ui-kit-core';
import {SpecialSelect} from 'components/atoms/SpecialSelect';
import {useSuppliersLocations} from 'hooks/useSuppliersLocations';
import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {
  SectionDestinationContainer,
  SectionDestinationLayout,
  SectionDestinationSubTitle,
  SectionDestinationWrapper,
} from './SectionDestination.styled';
import {SectionDestinationProps} from './types';

export const SectionDestination: FC<SectionDestinationProps> = ({data}) => {
  const {t} = useTranslation();
  const {dataLocation} = useSuppliersLocations();

  return (
    <SectionDestinationContainer data-testid="section-destination">
      <SectionDestinationSubTitle>
        {t('detail-orders.section-destination.subtitle')}
      </SectionDestinationSubTitle>
      <SectionDestinationLayout>
        <SectionDestinationWrapper>
          <SpecialSelect
            options={dataLocation || [{label: '', value: ''}]}
            label={t('detail-orders.section-destination.location')}
            defaultSelected={`${data?.location.name}`}
          />
        </SectionDestinationWrapper>
        <SectionDestinationWrapper>
          <InputBase
            autoFocus
            label={t('detail-orders.section-destination.delivery-address')}
            placeholder=""
            rounded="lg"
            value={`${data?.location.address}`}
          />
        </SectionDestinationWrapper>
        <SectionDestinationWrapper>
          <InputBase
            autoFocus
            label={t('detail-orders.section-destination.address-detail')}
            placeholder=""
            rounded="lg"
            value={`${data?.location?.additionalInformation}`}
          />
        </SectionDestinationWrapper>
      </SectionDestinationLayout>
    </SectionDestinationContainer>
  );
};
