export const ORIGIN_ID = 4;
export const OTP_COUNT_DOWN = 30;
export const INCREMENTED_OTP_COUNT_DOWN = 90;
export const YID_VIDEO_NEW_SALE = 'xzWB277O08I';
export enum PaymentTypes {
  CASH = 1,
  CARD = 2,
  BANK_TRANSFER = 4,
  OTHER = 5,
}
export enum TransactionTypes {
  SALE = 1,
  SPEND = 2,
}
export const SUPPORT_LINK = 'https://wa.me/+14327413593';
export const URL_APP_PLAY_STORE =
  'https://play.google.com/store/apps/details?id=com.treintaapp';
export enum ContactTypes {
  CLIENT = 1,
  SUPPLIER = 2,
}
export enum ToastLocations {
  GENERAL = 1,
  RIGHTBAR = 2,
}
export const IMG_PLACEHOLDER_SRC = '/assets/defaults/img_placeholder.png';

export enum SpendCategoryTypes {
  PUBLIC_SERVICES = '31c7afa6-0a8b-5e0e-83b5-c1b9fb84324f',
  PURCHASE_PRODUCTS = 'e1c784b7-0df2-5181-b0d7-00dc6d40af1e',
  RENT = '74f46506-4706-516c-b6fb-125423226de2',
  PAYROLL = '8f7bb350-bed9-5073-a897-32ecceedc594',
  ADMINISTRATIVE_EXPENSES = 'b7dabc6b-d79d-5fa8-b2d1-5759d5050990',
  ADVERTISING = 'f3d76fd2-4b86-5104-9598-81d5a3185078',
  TRANSPORT = '03ca3403-98a2-5c74-bcc5-7cf857e5083a',
  MAINTENANCE = '136eda05-68c3-5028-b819-1a882d0a297c',
  FURNITURE_OR_MACHINERY = '4d3b2035-8127-5c3b-94b3-c680934a3710',
  OTHERS = '5a451d32-ef9b-5887-a4d0-bf4dd58d0223',
}
export enum StoreTypeKeys {
  farming = 'farming',
  beauty = 'beauty',
  homeFurniture = 'homeFurniture',
  computing = 'computing',
  pharmacy = 'pharmacy',
  hardwareStore = 'hardwareStore',
  hotels = 'hotels',
  industry = 'industry',
  liquorStore = 'liquorStore',
  restaurant = 'restaurant',
  clothing = 'clothing',
  professionalServices = 'professionalServices',
  logistics = 'logistics',
  supermarket = 'supermarket',
  autoShop = 'autoShop',
  petShop = 'petShop',
  healthFood = 'healthFood',
  toys = 'toys',
  farmProducts = 'farmProducts',
  textiles = 'textiles',
  catalogue = 'catalogue',
  other = 'other',
  personal = 'personal',
}
export const StoreTypes = {
  'Supermercado o tienda de conveniencia': StoreTypeKeys.supermarket,
  'Industria o manufactura': StoreTypeKeys.industry,
  'Servicios de transporte y logística': StoreTypeKeys.logistics,
  'Ropa, zapatos y accesorios': StoreTypeKeys.clothing,
  'Agricultura y ganadería': StoreTypeKeys.farming,
  'Ferretería y construcción': StoreTypeKeys.hardwareStore,
  'Electrónica e informática': StoreTypeKeys.computing,
  'Artículos para el hogar': StoreTypeKeys.homeFurniture,
  'Farmacia y droguería': StoreTypeKeys.pharmacy,
  Licorería: StoreTypeKeys.liquorStore,
  'Restaurante, bar o comida rápida': StoreTypeKeys.restaurant,
  'Servicios profesionales': StoreTypeKeys.professionalServices,
  Personal: StoreTypeKeys.personal,
  Otros: StoreTypeKeys.other,
  'Artículos de belleza': StoreTypeKeys.beauty,
  'Hoteles y turismo': StoreTypeKeys.hotels,
  'Taller automotriz': StoreTypeKeys.autoShop,
  'Tienda de mascotas o veterinaria': StoreTypeKeys.petShop,
  'Tienda naturista': StoreTypeKeys.healthFood,
  'Venta de juguetes o libros': StoreTypeKeys.toys,
  'Venta de productos agrícolas': StoreTypeKeys.farmProducts,
  'Venta de textiles': StoreTypeKeys.textiles,
  'Venta por catálogo': StoreTypeKeys.catalogue,
};
