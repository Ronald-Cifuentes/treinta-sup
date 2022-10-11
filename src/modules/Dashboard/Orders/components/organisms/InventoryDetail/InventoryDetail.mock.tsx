import {
  ProductDetails,
  WarehouseDetailDiscount,
} from 'services/models/Product.Detail';

export const dataDetail: ProductDetails = {
  name: 'Shamp Baby Soft Docil X 200 Ml',
  imgUrl:
    'https://firebasestorage.googleapis.com/v0/b/treintaco.appspot.com/o/treinta%2Fstores%2F8c0a904a-487a-4ae6-91ea-8489de74c937%2Finventory%2F7d2ddd9f-27e4-4258-baa3-db3a2f4a1634?alt=media&token=7e919a6f-d503-4eab-996f-040b9d2784d2',
  sku: '2104000988',
  units: 1,
  weight: 3,
  hasAgeRestriction: false,
  description: 'null',
  categoryName: 'Shampoos y Jabones Bebés',
  measurementType: 'Und',
  warehouseDetails: [
    {
      id: 0,
      warehouseId: 'b34579be-3ee7-483e-b30d-243e568085b0',
      warehouseName: 'Kennedy - Bogotá',
      price: 6410,
      stock: 1200,
      isOutOfStock: true,
      isVisible: true,
      extID: '',
      stockLimit: 1000,
      discount: {} as WarehouseDetailDiscount,
    },
    {
      id: 1,
      warehouseId: 'b34579be-3ee7-483e-b30d-243e568085b1',
      warehouseName: 'Treinta Montevideo MU - Bogotá',
      price: 6410,
      stock: 1200,
      isOutOfStock: true,
      isVisible: true,
      extID: '',
      stockLimit: 1000,
      discount: {} as WarehouseDetailDiscount,
    },
  ],
};
