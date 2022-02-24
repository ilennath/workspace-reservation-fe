//import { ResponsiveContainer } from "recharts";
import * as React from 'react';
import "./tableBench.css";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

export default function TableBench() {

  const columns = [
    { id: 'number', label: 'No', minWidth: 80 },
    { id: 'code', label: 'Meja', minWidth: 100 },
    {
      id: 'status',
      label: 'Status',
      minWidth: 100,
      },
      {
        id: 'user',
        label: 'User',
        minWidth: 100,
        renderCell: (params) => {
          return(
            <div className="userListUser">
              <img className="userListImg" src={params.row.avatar} alt=""/>
              {params.row.username}
            </div>
          )
        }
        },
  ];

  function createData(number, code, status, avatar) {
    
    return { number, code, status, avatar };
  }
  
  const rows = [
    createData(1, 'A01', 'available', ""),
    createData(2, 'A02', 'available', ""),
    createData(3, 'A03', 'unavailable', "https://i.pinimg.com/564x/c1/23/3d/c1233d153095262845ae619764f8f240.jpg"),
    createData(4, 'A04', 'available', ""),
    createData(5, 'A05', 'unavailable', "https://i.pinimg.com/564x/fd/fc/46/fdfc464f9deabd7154c9c18018735179.jpg"),
    createData(6, 'A06', 'available', ""),
    createData(7, 'A07', 'available', ""),
    createData(8, 'A08', 'available', ""),
    createData(9, 'A09', 'unavailable', "https://i.pinimg.com/564x/9a/24/8a/9a248a4b9facdef5ffc429d4830d3558.jpg"),
    createData(10, 'A10', 'available', ""),
    createData(11, 'A11', 'unavailable', "https://i.pinimg.com/originals/5d/1a/18/5d1a1828eb8d3a9c66988195831747a6.jpg"),
    createData(12, 'A12', 'available', ""),
  ];

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

    return (
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 200 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    );
}