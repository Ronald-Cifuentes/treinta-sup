import {InputBase} from '@30sas/web-ui-kit-core';
import {SpecialSelect} from 'components/atoms/SpecialSelect';
import {useSuppliersLocations} from 'hooks/useSuppliersLocations';
import {FC, useEffect, useState} from 'react';
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
  const [deliverAddress, setDeliveryAddress] = useState<string>('');
  const [addressDetail, setAddressDetail] = useState<string>('');

  useEffect(() => {
    setDeliveryAddress(`${data?.location.address}`);
    setAddressDetail(`${data?.location?.additionalInformation}`);
  }, [data]);

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
            onChange={e => setDeliveryAddress(e.target.value)}
            value={deliverAddress}
          />
        </SectionDestinationWrapper>
        <SectionDestinationWrapper>
          <InputBase
            autoFocus
            label={t('detail-orders.section-destination.address-detail')}
            placeholder=""
            rounded="lg"
            onChange={e => setAddressDetail(e.target.value)}
            value={addressDetail}
          />
        </SectionDestinationWrapper>
      </SectionDestinationLayout>
    </SectionDestinationContainer>
  );
};
