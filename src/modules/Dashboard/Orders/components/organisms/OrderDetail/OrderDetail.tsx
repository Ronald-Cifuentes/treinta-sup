import {ColorProps} from '@30sas/web-ui-kit-theme';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import {DashboardLayout} from 'components/templates';
import {useDetails} from 'hooks/useDetails';
import {useOrders} from 'hooks/useOrders';
import {EventProvider} from 'providers/event-provider';
import React, {ChangeEvent, FC, useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {useParams} from 'react-router-dom';
import {getUser} from 'utils/infoUser';
import {ModalYesNo} from '../../atoms/ModalYesNo/ModalYesNo';
import {SectionClient} from '../../atoms/SectionClient';
import {SectionDestination} from '../../atoms/SectionDestination';
import {SectionOrigin} from '../../atoms/SectionOrigin';
import {SectionTable} from '../../atoms/SectionTable';
import {SectionTotal} from '../../atoms/SectionTotal';
import {StateBar} from '../../molecules/StateBar';
import {PointerStates} from '../OrderList/OrderList.const';
import {getCustomer, getLocation, getProducts} from './OrderDetail.func';
import {
  AlertError,
  AlertErrorStrong,
  AlertSuccess,
  AlertSuccessText,
  CardinalSection,
  CloseButton,
  CloseButtonError,
  DetailContainer,
  DetailContent,
  DetailTitle,
  EmptySpace,
} from './OrderDetail.styled';
import {DetailTypes} from './types';

const LINE_PROPS: ColorProps = {
  baseColor: 'danger',
  gradient: '500',
};

export const OrderDetail: FC<DetailTypes> = () => {
  const {id} = useParams();
  const {t} = useTranslation();
  const [open, setOpen] = useState(false);
  const [data, setData] = useState<{
    id: string;
    data: {[key: string]: unknown};
  }>();
  const [showAlert, setShowAlert] = useState(false);
  const [showError, setShowError] = useState(true);
  const [trigger, setTrigger] = useState(false);
  const [openChangeState, setOpenChangeState] = useState<boolean>(false);
  const [stateSelected, setStateSelected] = useState<string>('');
  const [select, setSelect] = useState<ChangeEvent<HTMLSelectElement>>();

  useEffect(() => {
    if (!trigger) {
      setTrigger(true);
    }
  }, [trigger]);

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

  const {mutateSetState} = useOrders({
    page: 1,
    size: 100,
    keyword: id?.slice(0, 7),
  });

  useEffect(() => {
    refetchDetail();
  }, [id, dataDetail, refetchDetail]);

  // eslint-disable-next-line complexity
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const el = e.target;
    EventProvider.getInstance().logEventAmplitude(
      'b2bs_orden_details_update_completed',
      {
        supplier: getUser()?.supplier,
        order_status: dataDetail.status.name,
      },
    );
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

  const handleBtnYes = (): void => {
    setOpen(false);
    EventProvider.getInstance().logEventAmplitude(
      'b2bs_order_details_update_confirmed',
      {
        supplier: getUser()?.supplier,
        order_status: dataDetail.status.name,
      },
    );
    mutateSetDetail(data || {})
      ?.then(res => {
        if (res.data.errors.length == 0) {
          refetchDetail();
        } else {
          setTrigger(false);
        }
        setShowAlert(true);
      })
      .catch(err => {
        setShowAlert(false);
        throw new Error(err);
      });
  };

  const handleChangeStates = (e: ChangeEvent<HTMLSelectElement>): void => {
    setSelect(e);
    setStateSelected(e.target.value);
    setOpenChangeState(true);
  };

  const handleBtnYesChangeState = (): void => {
    mutateSetState({
      items: Array.from([id || '']),
      statusId: PointerStates[stateSelected || ''],
    })?.then(() => {
      select && (select.target.selectedIndex = 0);
      setOpenChangeState(false);
      refetchDetail();
    });
  };

  return (
    <DashboardLayout title="" fancyLineProps={LINE_PROPS} sizeFancyLine="0.5px">
      <DetailContainer data-testid="detail">
        <DetailContent>
          <DetailTitle>
            {`${t('detail-orders.title')} ${id?.slice(0, 7)}`}
            {showAlert && !isErrorDetail && !isErrorSetDetail && (
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
            {showError && (isErrorDetail || isErrorSetDetail) && (
              <AlertError>
                <AlertErrorStrong>
                  <ErrorOutlineIcon />
                  {t('detail-orders.alert.error')}
                </AlertErrorStrong>
                <CloseButtonError onClick={() => setShowError(false)} />
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
            {trigger && <SectionTable data={dataProduct} />}
          </form>
        </DetailContent>
        <StateBar
          status={dataDetail.status}
          handleChangeStates={handleChangeStates}
        />
      </DetailContainer>
      <ModalYesNo {...{open, setOpen, handleBtnYes}} />
      <ModalYesNo
        open={openChangeState}
        setOpen={setOpenChangeState}
        handleBtnYes={handleBtnYesChangeState}
      />
    </DashboardLayout>
  );
};
