export interface Pagination {
  pagesNumber: number;
  itemsNumber: number;
  itemsByPage: number;
}

export interface Item {
  locationId: number;
  warehouseId: string;
  name: string;
  hasB2bCoverage: number;
}

export interface Locations {
  items: Item[];
  pagination: Pagination;
}
