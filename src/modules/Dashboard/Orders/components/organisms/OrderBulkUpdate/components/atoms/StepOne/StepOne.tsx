import {Box, FileDrop, Typography} from '@30sas/web-ui-kit-core';
import {PackageIcon} from '@30sas/web-ui-kit-icons';
import {useOrderBulkUpdate} from 'context/OrderBulkUpdateContext';
import {useTheme} from 'hooks';
import {useParseXlsxOrderBulkUpdate} from 'hooks/useParseXlsxOrderBulkUpdate';
import {ModalErrorWarehouse} from 'modules/Dashboard/Orders/components/atoms/ModalErrorWarehouse';
import {FC, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {SectionTemplates} from './SectionTemplates';
import {Card, IconContainer, StepOneContainer} from './StepOne.styled';
import {StepOneProps} from './types';

export const StepOne: FC<StepOneProps> = ({dataTestId = 'step-one-test'}) => {
  const {t} = useTranslation();
  const [modal, setModal] = useState(false);
  const {state} = useOrderBulkUpdate();
  const {files, status} = state;
  // eslint-disable-next-line no-console
  console.log('StepOne', state);
  const {onFilesChange} = useParseXlsxOrderBulkUpdate();
  const theme = useTheme();

  const handleDeleteFile = (): null => null;

  const labels = {
    normal: {
      mainText: t('order-bulk-update.drag-file'),
      endText: {
        text: 'o',
        linkText: t('order-bulk-update.select-from-computer'),
      },
    },
    error: {
      title: t('order-bulk-update.tittle-error'),
      mainText: t('order-bulk-update.main-text-error'),
      endText: {
        text: t('order-bulk-update.drag-file'),
        linkText: `${t('order-bulk-update.select-from-computer')}
          ${files[0]?.name}`,
      },
    },
    success: {
      mainText: t('order-bulk-update.file-upload-success'),
      endText: {
        text: '',
        linkText: files[0]?.name || '',
      },
    },
    info: {
      title: t('order-bulk-update.product-already-upload'),
      mainText: t('order-bulk-update.inventory-update-message'),
      endText: {
        text: 'o ',
        linkText: t('order-bulk-update.select-from-computer'),
      },
      finaleText: t('order-bulk-update.file-upload-success'),
    },
  };

  return (
    <>
      <SectionTemplates />
      <StepOneContainer data-testid={dataTestId}>
        <Card display="block">
          <Box display="flex">
            <IconContainer $backgroundColor={theme.colors.gray[200] as string}>
              <PackageIcon
                width={35}
                height={35}
                fill={theme.colors.gray[600]}
              />
            </IconContainer>
            <Box>
              <Typography variant="Mediumbold" margin="0">
                {t('order-bulk-update.upload-file')}
              </Typography>
              <Typography
                variant="Medium"
                margin="0"
                color="gray"
                colorType="700">
                {t('order-bulk-update.excel-instructions')}
              </Typography>
            </Box>
          </Box>
          <Box mt="8px">
            <FileDrop
              labels={labels}
              files={[]}
              filesCallback={onFilesChange}
              deleteFile={handleDeleteFile}
              allowFileTypes=".xlsx"
              maxSize={5 * 1024 * 1024}
              status={status}
              loading={false}
              dataTestIdInput="file-drop-massive-load"
              dataTestIdDeleteButton="file-drop-delete-massive-save"
            />
            <Typography
              variant="XSmall"
              margin="12px 0 0 0"
              color="gray"
              colorType="700">
              {t('order-bulk-update.format-allowed')}
            </Typography>
          </Box>
        </Card>
        <ModalErrorWarehouse open={modal} setOpen={setModal} />
      </StepOneContainer>
    </>
  );
};
