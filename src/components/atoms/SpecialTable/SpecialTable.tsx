import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


const StyledTableCell = styled(TableCell)(() => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#F4F5F6",
    color: "#67737E",
    border: "0",
    borderRadius: "6px 6px 0px 0px",
    padding: "14px",
    lineHeight: "20px"
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
  },
}));


const SpecialTable: React.ElementType = ({
  styleContainer,
  styleTable = {},
  styleHead = {},
  styleBody = {},
  columns = [],
  rows = []
}) => {
  return (
    <TableContainer style={styleContainer} data-testid="special-table-container">
      <Table style={styleTable} aria-label="customized table">
        <TableHead style={styleHead}>
          <TableRow>
            {columns.map(({ id, label, styleHeadCell = {} })=>(
                <StyledTableCell key={`head-cell-${id}`} style={styleHeadCell}>{label}</StyledTableCell>
              )
            )}
          </TableRow>
        </TableHead>
        <TableBody style={styleBody}>
          {rows.map((row,indRow) => (
            <TableRow key={`body-table-row-${indRow}`}>
              {Object.values(row).map((value:any, indCell)=>{
                return(
                  <StyledTableCell key={`body-cell-${indCell}`}>{value}</StyledTableCell>
                )
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default SpecialTable