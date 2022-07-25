import {DataProduct} from 'hooks/useDetails';
import {ProductsTypes} from 'services/suppliers.details/types';
import {DataDetailTypes} from 'services/models';

export const getCustomer = (
  dataDetail: DataDetailTypes,
  el: EventTarget,
): {[key: string]: unknown} => {
  // TODO  re-enable when the backend is ready to hanlde single data changes

  // const validCustomer = [
  //   dataDetail.customer.name != el[0].value,
  //   dataDetail.customer.lastName != el[1].value,
  //   dataDetail.customer.documentType != el[3].value,
  //   dataDetail.customer.document != el[4].value,
  // ];
  // const customer = {
  //   ...(validCustomer[0] && {name: el[0].value}),
  //   ...(validCustomer[1] && {lastName: el[1].value}),
  //   ...(validCustomer[2] && {documentTypeId: el[3].value}),
  //   ...(validCustomer[3] && {document: el[4].value}),
  //   ...((validCustomer[0] ||
  //     validCustomer[1] ||
  //     validCustomer[2] ||
  //     validCustomer[3]) && {email: dataDetail.customer.email}),
  // };
  const customer = {
    name: el[0].value,
    lastName: el[1].value,
    documentTypeId: parseInt(el[3].value),
    document: el[4].value,
    email: dataDetail.customer.email,
  };
  return customer;
};

export const getLocation = (
  dataDetail: DataDetailTypes,
  el: EventTarget,
): {[key: string]: unknown} => {
  // TODO  re-enable when the backend is ready to hanlde single data changes

  // const validLocation = [
  //   dataDetail.location.locationId != el[7].value,
  //   dataDetail.location.address != el[8].value,
  //   dataDetail.location.additionalInformation != el[9].value,
  //   dataDetail.location.contactPhone != el[2].value,
  // ];
  // const location = {
  //   ...(validLocation[0] && {locationId: el[7].value}),
  //   ...(validLocation[1] && {address: el[8].value}),
  //   ...(validLocation[2] && {additionalInformation: el[9].value}),
  //   ...(validLocation[3] && {contactPhone: el[2].value}),
  // };
  const location = {
    locationId: dataDetail.location.locationId,
    address: el[8].value,
    additionalInformation: el[9].value,
    contactPhone: el[2].value,
  };
  return location;
};

export const getProducts = (
  obj: EventTarget | object,
  dataProduct: DataProduct[],
): ProductsTypes[] => {
  const products: ProductsTypes[] = [];
  const step = 2;
  let count = 0;

  for (let i = 29; i < Object.assign(obj).length - 2; i += step) {
    const tempArr: ProductsTypes = {warehouseProductId: ''};
    for (let j = i; j < i + step; j++) {
      if (j % step == 0) {
        tempArr['baseValue'] =
          parseInt(obj[j].value.replace(/[.$\s]/g, '')) || 0;
      } else {
        tempArr['quantity'] = parseInt(obj[j].value.replace(/[.]/g, ''));
      }
    }
    tempArr['warehouseProductId'] =
      dataProduct[count]?.warehouseProductId || '';
    count++;
    products.push(tempArr);
  }

  return products;
};
