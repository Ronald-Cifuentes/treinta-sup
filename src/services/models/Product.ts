import {Pagination} from './GeneralTypes';

export interface Product {
  id: string;
  name: string;
  sku: string;
  price: number;
  hasAgeRestriction: boolean;
  description: string;
  thumbImgUrl: string;
  largeImgUrl: string;
  weight: number;
  categoryName: string;
  stock: number;
}

export interface Products {
  items: Product[];
  pagination: Pagination;
}
export interface Category {
  name: string;
  id: number;
  thumbImgUrl: string;
  parentId: number;
}

export interface Categories {
  items: Category[];
}

export interface Warehouse {
  id: string;
  name: string;
  address: string;
}

export interface Warehouses {
  items: Warehouse[];
}
