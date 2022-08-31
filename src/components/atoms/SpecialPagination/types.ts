import {ChangeEvent} from 'react';

export interface PropTypesSpecialPagination {
  onChange?: (event: ChangeEvent<unknown>, page: number) => void;
  count?: number;
  page?: number;
}
