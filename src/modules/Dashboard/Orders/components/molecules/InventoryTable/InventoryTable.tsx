// import {TableVirtualized} from '@30sas/web-ui-kit-core';
import {FC} from 'react';
import {Column} from '@30sas/web-ui-kit-core';
import {
  MainContainer,
  MainTable,
  TableContainer,
} from './InventoryTable.styled';

export interface InventoryTableProps {
  columns: Column[];
  products: unknown[];
}

export const InventoryTable: FC<InventoryTableProps> = ({
  columns,
  products,
}) => (
  <MainContainer>
    <TableContainer>
      <MainTable columns={columns} data={products} />
    </TableContainer>
  </MainContainer>
);
