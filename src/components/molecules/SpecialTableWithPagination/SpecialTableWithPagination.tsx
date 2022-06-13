import {FC, useState, ChangeEvent} from 'react';
import {SpecialPagination} from 'components/atoms/SpecialPagination';
import {
  Dropdown,
  TreintaDropdownOptions,
  TreintaDropdownType,
} from '@30sas/web-ui-kit-core';
import {TableMui} from 'modules/Dashboard/Orders/components/atoms/TableMui';
import {optionsRowsPerPage} from './SpecialTableWithPagination.mock';
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
  dropDownDefaultValue = 8,
  itemsByPage,
  setItemsByPage,
  handleSpecialPagination,
  initPagination = 1,
  totalItems = 20,
  date,
  tab,
}) => {
  const handleDropDown = (value: TreintaDropdownOptions): void => {
    setItemsByPage && setItemsByPage(parseInt(value.value as string));
  };

  const count =
    totalItems && itemsByPage && Math.ceil(totalItems / itemsByPage);

  return (
    <div data-testid="special-table-with-pagination">
      <TableMui formattedData={formattedData} pageSize={totalItems} />
      <LayoutHeader>
        <WrapperDropdownFrecuency>
          <Dropdown
            AlingMenu="right"
            dropdownOptions={optionsRowsPerPage}
            elementId="test"
            errorText="Error text"
            placeholder="Filas por página: "
            defaultValue={`Filas por página: ${dropDownDefaultValue}`}
            typeRenderItem={TreintaDropdownType['OnlyLetter']}
            onChange={handleDropDown}
          />
        </WrapperDropdownFrecuency>
        <WrapperDropdownDate>
          <SpecialPagination count={count} onChange={handleSpecialPagination} />
        </WrapperDropdownDate>
        <EmptyBlock />
      </LayoutHeader>
    </div>
  );
};
