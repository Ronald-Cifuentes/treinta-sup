import {Alert, Box, FileDrop, Typography} from '@30sas/web-ui-kit-core';
import {PackageIcon, WarningIcon} from '@30sas/web-ui-kit-icons';
import {ACTIONS, useUploadBulk} from 'context/UploadBulkContext';
import {useTheme} from 'hooks';
import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {useParseXlsx} from '../../../hooks';
import {ProductsRepeatedOptions} from '../../atoms/ProductsRepeatedOptions';
import {Card, IconContainer, WrapperCard} from './StepOne.styled';

export interface StepOneProps {
  status: 'normal' | 'error' | 'success' | 'info';
  isLoading: boolean;
  files: File[];
  productsRepeated: number;
}

export const StepOne: FC<StepOneProps> = ({
  status,
  isLoading,
  files,
  productsRepeated = 0,
}) => {
  const {t} = useTranslation();
  const {state, dispatch} = useUploadBulk();
  const {onFilesChange} = useParseXlsx();
  const theme = useTheme();

  const handleDeleteFile = (
    _: number,
    event: React.MouseEvent<SVGSVGElement, MouseEvent>,
  ): void => {
    event.stopPropagation();
    dispatch({
      type: ACTIONS.CLEAN_STATE,
    });
  };

  const labels = {
    normal: {
      mainText: t('bulk-upload.drag-file'),
      endText: {
        text: 'o',
        linkText: t('bulk-upload.select-from-computer'),
      },
    },
    error: {
      mainText: state.error || '',
      endText: {
        text: t('bulk-upload.drag-file'),
        linkText: `${t('bulk-upload.select-from-computer')}
          ${state.files[0]?.name}`,
      },
    },
    success: {
      mainText: t('bulk-upload.file-upload-success'),
      endText: {
        text: '',
        linkText: state.files[0]?.name || '',
      },
    },
    info: {
      title: t('bulk-upload.product-already-upload'),
      mainText: t('bulk-upload.inventory-update-message'),
      endText: {
        text: 'o ',
        linkText: t('bulk-upload.select-from-computer'),
      },
      finaleText: t('bulk-upload.file-upload-success'),
    },
  };

  return (
    <WrapperCard>
      <Card display="block">
        <Box display="flex">
          <IconContainer $backgroundColor={theme.colors.gray[200] as string}>
            <PackageIcon width={35} height={35} fill={theme.colors.gray[600]} />
          </IconContainer>
          <Box>
            <Typography variant="Mediumbold" margin="0">
              {t('bulk-upload.upload-file')}
            </Typography>
            <Typography
              variant="Medium"
              margin="0"
              color="gray"
              colorType="700">
              {t('bulk-upload.excel-instructions')}
            </Typography>
          </Box>
        </Box>
        {productsRepeated > 0 && !isLoading && (
          <Box m="16px 0">
            <Alert
              borderColor="warning"
              borderType="300"
              backgroundColor="warning"
              backgroundType="300"
              Icon={WarningIcon}
              text={
                <Typography
                  variant="Small"
                  margin="0"
                  padding="0"
                  color="warning"
                  colorType="700">
                  {t('bulk-upload.product-already-upload-amount', {
                    productsRepeated,
                  })}
                </Typography>
              }
            />
          </Box>
        )}
        <Box mt={productsRepeated === 0 ? '8px' : '0'}>
          <FileDrop
            labels={labels}
            files={files}
            filesCallback={onFilesChange}
            deleteFile={handleDeleteFile}
            allowFileTypes=".xlsx"
            maxSize={5 * 1024 * 1024}
            status={status}
            loading={isLoading}
          />
          {productsRepeated > 0 && !isLoading && (
            <ProductsRepeatedOptions productsRepeated={productsRepeated} />
          )}
          <Typography
            variant="XSmall"
            margin="12px 0 0 0"
            color="gray"
            colorType="700">
            {t('bulk-upload.format-allowed')}
          </Typography>
        </Box>
      </Card>
    </WrapperCard>
  );
};
