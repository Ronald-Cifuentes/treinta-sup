import {FC} from 'react';
import {Button, SearchInput} from '@30sas/web-ui-kit-core';
import {useTranslation} from 'react-i18next';
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

export const SectionSearchCtrls: FC<SectionSearchCtrlsTypes> = () => {
  const {t} = useTranslation();

  const handleDownloadTemplate = (): void => {
    alert('Pendiente de programar');
  };

  const handleDownloadInventory = (): void => {
    alert('Pendiente de programar');
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
