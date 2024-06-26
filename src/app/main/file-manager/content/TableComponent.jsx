import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const TableComponent = ({ rows }) => (
  <TableContainer>
    <Table sx={{ minWidth: 650 }} aria-label="customized table" size='small'>
      <TableHead className='bg-slate-200'>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell align="right">Last Modified</TableCell>
          <TableCell align="right">Permission</TableCell>
          <TableCell align="right">Size</TableCell>
        </TableRow>
      </TableHead>
      <TableBody className='bg-white'>
        {rows.map((row) => (
          <TableRow key={row.id}>
            <TableCell component="th" scope="row">{row.name}</TableCell>
            <TableCell align="right">{row.calories}</TableCell>
            <TableCell align="right">{row.fat}</TableCell>
            <TableCell align="right">{row.carbs}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);

export default TableComponent;

