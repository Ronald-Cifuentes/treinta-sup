import {Button, SearchInput} from '@30sas/web-ui-kit-core';
import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {LanguagesMap} from '../../../../../../config/constants/languages';
import {ButtonDownload} from '../../atoms/ButtonDownload';
import {
  SectionSearchCtrlsContainer,
  WrapperCtrls,
  WrapperDownloadInventory,
  WrapperDownloadTemplate,
  WrapperSearchBar,
  WrapperUploadInventory,
} from './SectionSearchCtrls.styled';
import {SectionSearchCtrlsTypes} from './types';

export const SectionSearchCtrls: FC<SectionSearchCtrlsTypes> = ({
  searchOnBlur,
  searchOnChange,
  searchValue,
}) => {
  const {t, i18n} = useTranslation();

  const handleDownloadTemplate = (): void => {
    document.location.href = '/assets/Template_Inventory.xlsx';
  };

  const handleDownloadInventory = (): void => {
    window.open(LanguagesMap[i18n?.language].INVENTORY_BULK_LOAD, '_blank');
  };

  const handleUploadInventory = (): void => {
    alert('Pendiente de programar');
  };

  return (
    <SectionSearchCtrlsContainer data-testid="section-search-ctrls">
      <WrapperSearchBar>
        <SearchInput
          fullWidth
          placeholder={`${t('inventory.input-search-placeholder')}`}
          backgroundColor="white"
          onBlur={searchOnBlur}
          onChange={searchOnChange}
          value={searchValue}
        />
      </WrapperSearchBar>
      <WrapperCtrls>
        <WrapperDownloadTemplate>
          <ButtonDownload
            text={t('inventory.button-download-template')}
            onClick={handleDownloadTemplate}
          />
        </WrapperDownloadTemplate>
        <WrapperDownloadInventory>
          <Button
            borderColor="secondary"
            borderColorType="700"
            color="neutrals"
            colorType="100"
            hoverColor="secondary"
            hoverColorType="100"
            label={t('inventory.button-download-inventory')}
            rounded="xl"
            size="medium"
            textColor="secondary"
            textColorType="700"
            textVariant="Smallbold"
            variant="secondary"
            onClick={handleDownloadInventory}
          />
        </WrapperDownloadInventory>
        <WrapperUploadInventory>
          <Button
            color="success"
            colorType="600"
            hoverColor="success"
            hoverColorType="500"
            label={t('inventory.button-upload-inventory')}
            rounded="xl"
            size="medium"
            textColor="neutrals"
            textColorType="100"
            textVariant="Smallbold"
            variant="primary"
            onClick={handleUploadInventory}
          />
        </WrapperUploadInventory>
      </WrapperCtrls>
    </SectionSearchCtrlsContainer>
  );
};
