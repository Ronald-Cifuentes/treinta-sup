export interface DeliversTableProps {
  date?: string | Date;
  dataTestId?: string;
  children?: React.ReactNode; // 👈️ added type for children
}
