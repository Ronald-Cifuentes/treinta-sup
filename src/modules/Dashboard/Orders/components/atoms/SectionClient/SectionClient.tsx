import {FC, useEffect, useState} from 'react';
import {InputBase} from '@30sas/web-ui-kit-core';
import {useTranslation} from 'react-i18next';
import {useCommonDocumentTypes} from 'hooks/useCommonDocumentTypes';
import {SpecialSelect} from 'components/atoms/SpecialSelect';
import {SectionClientProps} from './types';
import {
  SectionClientLayoutInputs,
  SectionClientSubTitle,
  SectionClientWrapperInputs,
} from './SectionClient.styled';

export const SectionClient: FC<SectionClientProps> = ({data}) => {
  const {t} = useTranslation();
  const {dataDocumentType} = useCommonDocumentTypes();
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [document, setDocument] = useState<string>('');

  useEffect(() => {
    setFirstName(`${data?.customer?.name}`);
    setLastName(`${data?.customer?.lastName}`);
    setPhone(`${data?.location.contactPhone}`);
    setDocument(`${data?.customer?.document}`);
  }, [data]);

  return (
    <div data-testid="section-client">
      <SectionClientSubTitle>
        {t('detail-orders.section-client.subtitle')}
      </SectionClientSubTitle>
      <SectionClientLayoutInputs>
        <SectionClientWrapperInputs>
          <InputBase
            autoFocus
            label={t('detail-orders.section-client.first-name')}
            rounded="lg"
            onChange={e => setFirstName(e.target.value)}
            value={firstName}
          />
        </SectionClientWrapperInputs>
        <SectionClientWrapperInputs>
          <InputBase
            autoFocus
            label={t('detail-orders.section-client.last-name')}
            rounded="lg"
            onChange={e => setLastName(e.target.value)}
            value={lastName}
          />
        </SectionClientWrapperInputs>
        <SectionClientWrapperInputs>
          <InputBase
            autoFocus
            label={t('detail-orders.section-client.phone')}
            rounded="lg"
            onChange={e => setPhone(e.target.value)}
            value={phone}
          />
        </SectionClientWrapperInputs>
        <SectionClientWrapperInputs>
          <SpecialSelect
            options={dataDocumentType}
            label={t('detail-orders.section-client.document-type')}
            defaultSelected={`${data?.customer?.documentType}`}
          />
        </SectionClientWrapperInputs>
        <SectionClientWrapperInputs>
          <InputBase
            autoFocus
            label={t('detail-orders.section-client.document')}
            rounded="lg"
            onChange={e => setDocument(e.target.value)}
            value={document}
          />
        </SectionClientWrapperInputs>
      </SectionClientLayoutInputs>
    </div>
  );
};
