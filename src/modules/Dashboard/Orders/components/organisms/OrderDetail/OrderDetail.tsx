import {FC, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import {useDetails} from 'hooks/useDetails';
import {ColorProps} from '@30sas/web-ui-kit-theme';
import {DashboardLayout} from 'components/templates';
import {useTranslation} from 'react-i18next';
import {Backdrop} from '@30sas/web-ui-kit-core';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import {ModalYesNo} from '../../atoms/ModalYesNo/ModalYesNo';
import {SectionClient} from '../../atoms/SectionClient';
import {SectionOrigin} from '../../atoms/SectionOrigin';
import {SectionDestination} from '../../atoms/SectionDestination';
import {SectionTotal} from '../../atoms/SectionTotal';
import {SectionTable} from '../../atoms/SectionTable';
import {
  AlertError,
  AlertErrorStrong,
  AlertSuccess,
  AlertSuccessText,
  CardinalSection,
  CloseButton,
  CloseButtonError,
  DetailContainer,
  DetailTitle,
  EmptySpace,
} from './OrderDetail.styled';
import {DetailTypes} from './types';
import {getCustomer, getLocation, getProducts} from './OrderDetail.func';

const LINE_PROPS: ColorProps = {
  baseColor: 'danger',
  gradient: '500',
};

export const OrderDetail: FC<DetailTypes> = () => {
  const {id} = useParams();
  const {t} = useTranslation();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<{
    id: string;
    data: {[key: string]: unknown};
  }>();
  const [showAlert, setShowAlert] = useState(false);

  const {
    dataDetail,
    refetchDetail,
    dataProduct,
    mutateSetDetail,
    isErrorDetail,
    isErrorSetDetail,
  } = useDetails({
    id,
  });

  useEffect(() => {
    refetchDetail();
  }, [id, dataDetail, refetchDetail]);

  // eslint-disable-next-line complexity
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const el = e.target;

    if (
      el[0].value &&
      el[2].value &&
      el[1].value &&
      el[3].value &&
      el[4].value &&
      el[7].value &&
      el[8].value &&
      el[9].value &&
      el[11].value
    ) {
      const appliedDiscount = parseInt(el[11].value.replace(/[$.\s]/g, ''));
      const customer = getCustomer(dataDetail, el);
      const location = getLocation(dataDetail, el);
      const products = getProducts(el || {}, dataProduct);

      // TODO  re-enable when the backend is ready to hanlde single data changes

      // const tempData: {[key: string]: unknown} = {
      //   ...(dataDetail.appliedDiscount != appliedDiscount && {appliedDiscount}),
      //   ...(!!Object.keys(customer).length && {customer}),
      //   ...(!!Object.keys(location).length && {location}),
      //   ...(!!Object.keys(products).length && {products}),
      // };
      const tempData: {[key: string]: unknown} = {
        appliedDiscount,
        customer,
        location,
        products,
      };

      setData({
        id: dataDetail.id,
        data: tempData,
      });

      setOpen(true);
    } else {
      alert('Todos los campos deben estar llenos');
    }
  };

  const handleBtnYes = async (): Promise<void> => {
    setLoading(true);
    setOpen(false);
    await mutateSetDetail(data || {});
    setShowAlert(true);
    setLoading(false);
  };

  return (
    <DashboardLayout title="" fancyLineProps={LINE_PROPS} sizeFancyLine="0.5px">
      <DetailContainer data-testid="detail">
        <DetailTitle>
          {`${t('detail-orders.title')} ${id?.slice(0, 8)}`}
          {showAlert && (
            <AlertSuccess>
              <div style={{display: 'flex', flexDirection: 'row'}}>
                <ErrorOutlineIcon />
                <AlertSuccessText>
                  {t('detail-orders.alert.success')}
                </AlertSuccessText>
              </div>
              <CloseButton onClick={() => setShowAlert(false)} />
            </AlertSuccess>
          )}
          {(isErrorDetail || isErrorSetDetail) && (
            <AlertError>
              <AlertErrorStrong>
                <ErrorOutlineIcon />
                {t('detail-orders.alert.error')}
              </AlertErrorStrong>
              <CloseButtonError />
            </AlertError>
          )}
          <EmptySpace />
        </DetailTitle>
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
      <ModalYesNo {...{open, setOpen, handleBtnYes}} />
      <Backdrop open={loading} />
    </DashboardLayout>
  );
};
