import {ROUTES} from 'routes/types';

export const DASHBOARD_HOME = ROUTES.ORDERS;

export enum RightBarScreensShared {
  CONTACTS = 'contacts',
  STORES = 'stores',
}

export enum RightBarScreensContacts {
  CONTACT_LIST = 'contacts/list',
  ADD_CONTACT = 'contacts/add',
  EDIT_CONTACT = 'contacts/edit',
  CONFIRM_DELETE_CONTACT = 'contacts/delete',
  CONFIRM_EXIT = 'contacts/confirm-exit',
}

export enum RightBarScreensStores {
  ADD_STORE = 'stores/add',
  EDIT_STORE = 'stores/edit',
  CONFIRM_DELETE_STORES = 'stores/delete',
  CONFIRM_EXIT = 'stores/confirm-exit',
}

export enum RightBarScreensInventory {
  DOWNLOAD = 'download',
  CREATE_PRODUCT = 'createProduct',
  ADD_PRODUCT = 'addProduct',
  EDIT_PRODUCT = 'editProduct',
  EDIT_BULK_UPLOAD_PRODUCT = 'editBulkUploadProduct',
  ADD_CATEGORY = 'addCategory',
  EDIT_CATEGORY = 'editCategory',
  EDIT_CATEGORIES = 'editCategories',
  CONFIRM_DELETE = 'confirmDelete',
  CONFIRM_DELETE_CATEGORY = 'confirmDeleteCategory',
  PRODUCT_CHECK = 'productCheck',
  DELETE_PRODUCT = 'deleteProduct',
}

export enum RightBarScreensBalance {
  EDIT_SALE_LOADING = 'editSaleLoading',
  ADD_PRODUCTS_LOADING = 'addProductsLoading',
  EDIT_SALE = 'editSale',
  CREATE_SALE = 'createSale',
  SUMMARY_SALE = 'summarySale',
  VENDORS_LIST = 'vendorsList',
  ADD_PRODUCTS = 'addProducts',
  FILTER_BUTTON = 'filterButton',
  CONFIRM_DELETE = 'confirmDelete',
  CUSTOMERS_LIST = 'customersList',
  EMPLOYEES_LIST = 'employeesList',
  DOWNLOAD_REPORT = 'downloadReport',
  ADD_PRODUCTS_EDIT = 'addProductsEdit',
  SUMMARY_SALE_LOADING = 'summatySaleLoading',
  CREATE_EDIT_EXPENSE = 'createEditExpense',
  FRECUENCY_FORM = 'frecuencyForm',
}

export enum RightBarScreensBalanceSale {
  CONFIRM_SALE = 'confirmSale',
  CREATE_FREE_SALE = 'createFreeSale',
  SUCCESSFUL_SALE = 'successfulSale',
}

export type Screens =
  | RightBarScreensBalance
  | RightBarScreensBalanceSale
  | RightBarScreensContacts
  | RightBarScreensStores
  | RightBarScreensInventory;
