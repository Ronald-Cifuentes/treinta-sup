import {FC} from 'react';
import {SpecialPagination} from 'components/atoms/SpecialPagination';
import {
  Dropdown,
  TreintaDropdownOptions,
  TreintaDropdownType,
} from '@30sas/web-ui-kit-core';
import {TableMui} from 'modules/Dashboard/Orders/components/atoms/TableMui';
import {useTranslation} from 'react-i18next';
import {
  createOnlyOneOption,
  createOptionsRowsPerPage,
} from './SpecialTableWithPagination.mock';
import {PropTypesSpecialTableWithPagination} from './types';
import {
  EmptyBlock,
  LayoutHeader,
  WrapperDropdownDate,
  WrapperDropdownFrecuency,
} from './SpecialTableWithPagination.styled';

export const SpecialTableWithPagination: FC<
  PropTypesSpecialTableWithPagination
> = ({
  formattedData,
  dropDownDefaultValue = 25,
  itemsByPage,
  setItemsByPage,
  handleSpecialPagination,
  page,
  totalItems = 20,
  ctrlButtons,
  handleGrid,
  columns,
  checkboxSelection,
  onlyOneOption,
}) => {
  const {t} = useTranslation();

  const handleDropDown = (value: TreintaDropdownOptions): void => {
    setItemsByPage && setItemsByPage(parseInt(value.value as string));
  };

  const count =
    totalItems && itemsByPage && Math.ceil(totalItems / itemsByPage);

  const selectDropDownOptions = (): TreintaDropdownOptions[] =>
    onlyOneOption
      ? createOnlyOneOption(t('orders.table.rowsPerPage'))
      : createOptionsRowsPerPage(t('orders.table.rowsPerPage'));

  return (
    <div data-testid="special-table-with-pagination">
      <TableMui
        formattedData={formattedData}
        pageSize={itemsByPage}
        handleGrid={handleGrid}
        columns={columns}
        checkboxSelection={checkboxSelection}
      />
      <LayoutHeader>
        <WrapperDropdownFrecuency>
          <Dropdown
            dropdownOptions={selectDropDownOptions()}
            elementId="test"
            errorText="Error text"
            placeholder={`${t('orders.table.rowsPerPage')} `}
            defaultValue={`${t(
              'orders.table.rowsPerPage',
            )} ${dropDownDefaultValue}`}
            typeRenderItem={TreintaDropdownType['OnlyLetter']}
            onChange={handleDropDown}
          />
        </WrapperDropdownFrecuency>
        <WrapperDropdownDate>
          <SpecialPagination
            count={count}
            page={page}
            onChange={handleSpecialPagination}
          />
        </WrapperDropdownDate>
        <EmptyBlock>{ctrlButtons}</EmptyBlock>
      </LayoutHeader>
    </div>
  );
};
