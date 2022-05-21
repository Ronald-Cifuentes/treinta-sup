import {FC} from 'react';
import {DeleteIcon} from '@30sas/web-ui-kit-icons';
import {Button, Grid, Typography} from '@30sas/web-ui-kit-core';

import {useTheme} from 'hooks';
import {useDashboard} from 'context/DashboardContext/DashboardContext';
import {RightBarContainer} from 'components/molecules/RightBarContainer/RightBarContainer';

export const ConfirmDelete: FC = () => {
  const {params, rightBarNavigation} = useDashboard();
  const {goBack} = rightBarNavigation;
  const {actions, deleteConfirmType} = params;
  const Theme = useTheme();
  const renderData =
    deleteConfirmType === 'category'
      ? {
          textConfirm: `Una vez eliminada la categoría, los productos aparecerán en "Ver todos".`,
          textTitle: '¿Quieres eliminar esta categoría?',
        }
      : {
          textConfirm:
            'Una vez eliminado el producto, no podrás recuperar la información registrada.',
          textTitle: '¿Quieres eliminar este producto?',
        };

  return (
    <RightBarContainer title="">
      <Grid
        item
        xs={12}
        style={{
          marginTop: Theme.utils.spacing(2),
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          textAlign: 'center',
        }}>
        <DeleteIcon
          fill={Theme.colors.danger[500]}
          width="56px"
          height="56px"
        />

        <Typography
          color="secondary"
          colorType="700"
          variant="Largebold"
          margin={Theme.utils.spacing(6, 0, 2, 0)}>
          {renderData.textTitle}
        </Typography>

        <Typography
          color="neutrals"
          colorType="800"
          variant="Medium"
          margin={Theme.utils.spacing(2, 0)}>
          {renderData.textConfirm}
        </Typography>

        <Grid container margin={Theme.utils.spacing(6, 0)}>
          <Grid item xs={6} alignSelf="center">
            <Button
              label="Sí, eliminar."
              rounded="xl"
              textColor="danger"
              textColorType="500"
              fullWidth
              upper={false}
              size="small"
              textVariant="Smallbold"
              transparent
              hoverColor="danger"
              hoverColorType="100"
              onClick={actions && actions[0]}
            />
          </Grid>
          <Grid item xs={6}>
            <Button
              label="Regresar"
              rounded="xl"
              size="medium"
              textColor="primary"
              textColorType="900"
              textVariant="Mediumbold"
              fullWidth
              disabled={false}
              upper={false}
              onClick={goBack}
            />
          </Grid>
        </Grid>
      </Grid>
    </RightBarContainer>
  );
};
