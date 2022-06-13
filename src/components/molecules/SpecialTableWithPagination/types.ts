import {OrdersResponse} from 'hooks/useOrders';

export interface PropTypesSpecialTableWithPagination {
  dropDownDefaultValue?: number;
  setItemsByPage?: (value: number) => void;
  itemsByPage?: number;
  handleSpecialPagination?: (
    event: React.ChangeEvent<unknown>,
    page: number,
  ) => void;
  initPagination?: number;
  totalItems?: number;
  date?: string | unknown;
  tab?: number;
  formattedData?: OrdersResponse;
}
