import {FC} from 'react';
import {styled} from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import {Columns, Rows} from './SpecialTable.mock';

const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#F4F5F6',
    color: '#67737E',
    border: '0',
    borderRadius: '6px 6px 0px 0px',
    padding: '14px',
    lineHeight: '20px',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));

export interface PorpTypesSpecialTable {
  styleContainer?: React.CSSProperties;
  styleTable?: React.CSSProperties;
  styleHead?: React.CSSProperties;
  styleBody?: React.CSSProperties;
  columns?: Array<Columns>;
  rows?: Array<Rows>;
  handleForm?: React.FormEventHandler<HTMLFormElement>;
}

const SpecialTable: FC<PorpTypesSpecialTable> = ({
  styleContainer = {},
  styleTable = {},
  styleHead = {},
  styleBody = {},
  columns = [],
  rows = [],
  handleForm,
}) => {
  const handleEventDefault = e => {
    e.preventDefault();
    console.log('OnSubmit');
    handleForm && handleForm(e);
  };

  return (
    <form onSubmit={handleEventDefault}>
      <TableContainer
        style={styleContainer}
        data-testid="special-table-container">
        <Table style={styleTable} aria-label="customized table">
          <TableHead style={styleHead}>
            <TableRow>
              {columns.map(({id, label}) => (
                <StyledTableCell key={`head-cell-${id}`}>
                  {label}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody style={styleBody}>
            {rows.map((row, indRow) => (
              <TableRow key={`body-table-row-${indRow}`}>
                {Object.values(row).map((value: any, indCell) => (
                  <StyledTableCell key={`body-cell-${indCell}`}>
                    {value}
                  </StyledTableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <button className="sub">Submit</button>
    </form>
  );
};

export default SpecialTable;
