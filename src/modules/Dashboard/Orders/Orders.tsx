import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {ColorProps} from '@30sas/web-ui-kit-theme';
import {DashboardLayout} from 'components/templates';
import {columns, rowsWithComponents} from '../../../components/atoms/SpecialTable/Mocks';
import SpecialTable from '../../../components/atoms/SpecialTable';

const LINE_PROPS: ColorProps = {
  baseColor: 'gray',
  gradient: '500',
};

export const Orders: FC = () => {
  const {t} = useTranslation();

  return (
    <DashboardLayout
      title={t('orders.title')}
      fancyLineProps={LINE_PROPS}
      sizeFancyLine="0.5px">
      <SpecialTable
        columns={columns}
        rows={rowsWithComponents}
        styleContainer={{
          boxShadow: '2px 4px 8px rgba(34, 38, 42, 0.05)',
          marginTop: '40px',
          marginBottom: '56px',
        }}
      />
    </DashboardLayout>
  );
};
