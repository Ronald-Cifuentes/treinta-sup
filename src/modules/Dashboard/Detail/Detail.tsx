import {FC, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {useDetails} from 'hooks/useDetails';
import {ColorProps} from '@30sas/web-ui-kit-theme';
import {DashboardLayout} from 'components/templates';
import {useTranslation} from 'react-i18next';
import {CardinalSection, DetailContainer, DetailTitle} from './Detail.styled';
import {SectionClient} from './components/atoms/SectionClient';
import {SectionOrigin} from './components/atoms/SectionOrigin';
import {SectionDestination} from './components/atoms/SectionDestination';
import {SectionTotal} from './components/atoms/SectionTotal';
import {SectionTable} from './components/atoms/SectionTable';
import {DetailProps} from './types';

const LINE_PROPS: ColorProps = {
  baseColor: 'danger',
  gradient: '500',
};

export const Detail: FC<DetailProps> = () => {
  const {id} = useParams();
  const {t} = useTranslation();

  const {dataDetail, refetchDetail, dataProduct} = useDetails({id});

  useEffect(() => {
    refetchDetail();
  }, [id, dataDetail, refetchDetail]);

  const handleSubmit = (e): void => {
    e.preventDefault();
  };

  return (
    <DashboardLayout title="" fancyLineProps={LINE_PROPS} sizeFancyLine="0.5px">
      <DetailContainer data-testid="detail">
        <DetailTitle>{`${t('detail-orders.title')} ${id?.slice(
          0,
          8,
        )}`}</DetailTitle>
        <form onSubmit={handleSubmit}>
          <SectionClient data={dataDetail} />
          <CardinalSection>
            <SectionOrigin data={dataDetail} />
            <SectionDestination data={dataDetail} />
          </CardinalSection>
          <SectionTotal data={dataDetail} />
          <SectionTable data={dataProduct} />
        </form>
      </DetailContainer>
    </DashboardLayout>
  );
};
