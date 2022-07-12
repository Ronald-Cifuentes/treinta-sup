import {InputBase} from '@30sas/web-ui-kit-core';
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
          <InputBase
            autoFocus
            label={t('detail-orders.section-destination.location')}
            placeholder=""
            rounded="lg"
            value={`${data?.location.name}`}
            disabled
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
