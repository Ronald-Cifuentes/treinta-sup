import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {ColorProps} from '@30sas/web-ui-kit-theme';
import {DashboardLayout} from 'components/templates';

import {Instructions} from './components/Instructions';

import {Title, Header, Content, Container} from './DownloadOrders.styled';

const LINE_PROPS: ColorProps = {
  baseColor: 'gray',
  gradient: '500',
};

export const DownloadOrders: FC = () => {
  const {t} = useTranslation();
  return (
    <DashboardLayout title="" fancyLineProps={LINE_PROPS} sizeFancyLine="0.5px">
      <Container>
        <Header>
          <Title>{t('download_orders.title')}</Title>
        </Header>
        <Content>
          <Instructions />
        </Content>
      </Container>
    </DashboardLayout>
  );
};
