import {Alert, Box, FileDrop, Typography} from '@30sas/web-ui-kit-core';
import {PackageIcon, WarningIcon} from '@30sas/web-ui-kit-icons';
import {ACTIONS, useUploadBulk} from 'context/UploadBulkContext';
import {useTheme} from 'hooks';
import {useParseXlsx} from 'hooks/useParseXlsx';
import {ModalErrorWarehouse} from 'modules/Dashboard/Orders/components/atoms/ModalErrorWarehouse';
import {FC, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {ProductsRepeatedOptions} from '../../atoms/ProductsRepeatedOptions';
import {ButtonError} from '../Buttons/Buttons.styled';
import {
  Card,
  IconContainer,
  WrapperBtnError,
  WrapperCard,
} from './StepOne.styled';
import {StepOneProps} from './types';

export const StepOne: FC<StepOneProps> = () => {
  const {t} = useTranslation();
  const [modal, setModal] = useState(false);
  const {state, dispatch} = useUploadBulk();
  const {productsRepeated, files, status, error, errorMessage} = state;
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
      mainText: `${errorMessage}`,
      endText: {
        text: t('bulk-upload.drag-file'),
        linkText: `${t('bulk-upload.select-from-computer')}
          ${files[0]?.name}`,
      },
    },
    success: {
      mainText: t('bulk-upload.file-upload-success'),
      endText: {
        text: '',
        linkText: files[0]?.name || '',
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
        {productsRepeated > 0 && (
          <Box m="16px 0">
            <Alert
              borderColor="warning"
              borderType="300"
              backgroundColor="warning"
              backgroundType="300"
              Icon={WarningIcon}
              text={
                <div>
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
                </div>
              }
            />
          </Box>
        )}
        <Box mt={productsRepeated === 0 ? '8px' : '0'}>
          <FileDrop
            labels={labels}
            files={[]}
            filesCallback={onFilesChange}
            deleteFile={handleDeleteFile}
            allowFileTypes=".xlsx"
            maxSize={5 * 1024 * 1024}
            status={status}
            loading={false}
          />
          {productsRepeated > 0 && (
            <ProductsRepeatedOptions productsRepeated={productsRepeated} />
          )}
          {status == 'error' && error.details?.length && (
            <WrapperBtnError>
              <ButtonError onClick={() => setModal(true)}>
                {t('bulk-upload.show-error-detail')}
              </ButtonError>
            </WrapperBtnError>
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
      <ModalErrorWarehouse open={modal} setOpen={setModal} />
    </WrapperCard>
  );
};
