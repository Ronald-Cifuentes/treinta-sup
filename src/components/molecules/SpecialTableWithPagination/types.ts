import {OrdersResponse} from 'hooks/useOrders';

export interface PropTypesSpecialTableWithPagination {
  formattedData?: OrdersResponse;
  dropDownDefaultValue?: number;
  setItemsByPage?: (value: number) => void;
  itemsByPage?: number;
  handleSpecialPagination?: (
    event: React.ChangeEvent<unknown>,
    page: number,
  ) => void;
  totalItems?: number;
}
