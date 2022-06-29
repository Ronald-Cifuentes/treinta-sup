export interface StatusDetail {
  id: number;
  name: string;
}

export interface CustomerDetail {
  name: string;
  lastName: string;
  document: string;
  email: string;
  documentType: string;
  documentTypeId: number;
}

export interface LocationDetail {
  locationId: number;
  name: string;
  address: string;
  additionalInformation: string;
  contactPhone: string;
}

export interface Product {
  id: string;
  externalId: unknown;
  warehouseName: string;
  warehouseAddress: string;
  sku: string;
  name: string;
  price: number;
  thumbImgUrl: string;
  discountValue: number;
  baseValue: number;
  value: number;
  quantity: number;
  initialQuantity: number;
  warehouseProductId: string;
}

export interface DataDetailTypes {
  id: string;
  externalId: unknown;
  value: number;
  appliedDiscount: number;
  productsValue: number;
  phone: string;
  comments: string;
  createdAt: string;
  updatedAt: string;
  deliveryDate: string;
  status: StatusDetail;
  customer: CustomerDetail;
  location: LocationDetail;
  products: Product[];
}
