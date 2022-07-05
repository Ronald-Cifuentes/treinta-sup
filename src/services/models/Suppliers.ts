import {Pagination} from './GeneralTypes';

export interface ItemOfLocations {
  locationId: number;
  warehouseId: string;
  name: string;
  hasB2bCoverage: number;
}

export interface Locations {
  items: ItemOfLocations[];
  pagination: Pagination;
}
