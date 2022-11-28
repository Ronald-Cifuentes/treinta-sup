export interface DeliversTableProps {
  date?: string | Date;
  dataTestId?: string;
  children?: React.ReactNode; // 👈️ added type for children
  dataTestIdGetBatch?: string;
}

export interface HourActionProps {
  color?: string;
  action?: string;
}

export interface GetOrdersByDateProps {
  warehouseId?: string;
  supplierId?: string;
  batchHour?: string;
  batchDate?: string;
}
