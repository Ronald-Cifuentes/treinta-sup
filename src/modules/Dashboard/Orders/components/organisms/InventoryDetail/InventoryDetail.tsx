import {FC, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import {ColorProps} from '@30sas/web-ui-kit-theme';
import {DashboardLayout} from 'components/templates';
import {useProductDetail} from 'hooks/useInventoryDetail';
import {SectionTableInventoryDetail} from '../../molecules/SectionTableInventoryDetail';
import {
  InventoryDetailContainer,
  InventoryDetailTitle,
  InventoryDetailEmptySpace,
  InventoryDetailImg,
  WrapperTittle,
} from './InventoryDetail.styled';
import {DetailTypes} from './types';

const LINE_PROPS: ColorProps = {
  baseColor: 'danger',
  gradient: '500',
};

export const InventoryDetail: FC<DetailTypes> = () => {
  const {id} = useParams();

  const {dataProductDetail, refetchProductDetail} = useProductDetail({id});

  useEffect(() => {
    refetchProductDetail();
  }, [id, refetchProductDetail]);

  return (
    <DashboardLayout title="" fancyLineProps={LINE_PROPS} sizeFancyLine="0.5px">
      <InventoryDetailContainer data-testid="detail">
        <InventoryDetailTitle>
          <InventoryDetailImg src={dataProductDetail.imgUrl} alt="" />
          <WrapperTittle>{dataProductDetail.name}</WrapperTittle>
          <InventoryDetailEmptySpace />
        </InventoryDetailTitle>
        <SectionTableInventoryDetail
          data={dataProductDetail.warehouseDetails}
        />
      </InventoryDetailContainer>
    </DashboardLayout>
  );
};
