import {Box, Typography} from '@30sas/web-ui-kit-core';
import {useTheme} from 'hooks';
import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import ExcelIcon from '@30sas/web-ui-kit-icons/dist/icons/Excel';
import {Card, IconContainer, SectionTemplateContainer} from '../StepOne.styled';
import {ButtonDownload} from './SectionTemplates.styled';
import {SectionTemplatesProps} from './types';

export const SectionTemplates: FC<SectionTemplatesProps> = () => {
  const {t} = useTranslation();
  const theme = useTheme();

  const handleDownloadTemplate = (): void => {
    document.location.href = '/assets/Plantilla_carga_masiva_estados_V4.xlsx';
  };

  const handleDownloadPdf = (): void => {
    fetch(
      '/assets/Cambio de Estados por el Portal de Proveedores - Marketplace Treinta.pdf',
    ).then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        const alink = document.createElement('a');
        alink.href = fileURL;
        alink.download =
          'Cambio de Estados por el Portal de Proveedores - Marketplace Treinta.pdf';
        alink.click();
      });
    });
  };

  return (
    <SectionTemplateContainer>
      <Card display="block">
        <Box display="flex">
          <IconContainer $backgroundColor={theme.colors.success[200] as string}>
            <ExcelIcon
              width={35}
              height={35}
              fill={theme.colors.success[600]}
            />
          </IconContainer>
          <Box>
            <Typography variant="Mediumbold" margin="0">
              {t('order-bulk-update.templates.title')}
            </Typography>
            <Typography
              variant="Medium"
              margin="0"
              color="gray"
              colorType="700">
              {t('order-bulk-update.templates.description')}
            </Typography>
            <Box>
              <ButtonDownload onClick={handleDownloadTemplate}>
                <FileDownloadIcon />
                {t('order-bulk-update.templates.btn-template')}
              </ButtonDownload>
              <ButtonDownload onClick={handleDownloadPdf}>
                <FileDownloadIcon />
                {t('order-bulk-update.templates.btn-pdf')}
              </ButtonDownload>
            </Box>
          </Box>
        </Box>
      </Card>
    </SectionTemplateContainer>
  );
};
