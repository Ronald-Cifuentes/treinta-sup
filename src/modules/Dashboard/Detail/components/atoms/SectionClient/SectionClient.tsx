import {FC} from 'react';
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
            placeholder=""
            rounded="lg"
            value={`${data?.customer?.name}`}
          />
        </SectionClientWrapperInputs>
        <SectionClientWrapperInputs>
          <InputBase
            autoFocus
            label={t('detail-orders.section-client.last-name')}
            placeholder=""
            rounded="lg"
            value={`${data?.customer?.lastName}`}
          />
        </SectionClientWrapperInputs>
        <SectionClientWrapperInputs>
          <InputBase
            autoFocus
            label={t('detail-orders.section-client.phone')}
            placeholder=""
            rounded="lg"
            value={`${data?.location.contactPhone}`}
          />
        </SectionClientWrapperInputs>
        <SectionClientWrapperInputs>
          <SpecialSelect
            options={dataDocumentType}
            label={t('detail-orders.section-client.document')}
          />
        </SectionClientWrapperInputs>
        <SectionClientWrapperInputs>
          <InputBase
            autoFocus
            label={t('detail-orders.section-client.document')}
            placeholder=""
            rounded="lg"
            value={`${data?.customer?.document}`}
          />
        </SectionClientWrapperInputs>
      </SectionClientLayoutInputs>
    </div>
  );
};
