import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';



function MUITable() {
    const rows = [
        {id: 1, firstName: "Cemal", lastName: "Batur", age: 40},
        {id: 2, firstName: "Ahmet", lastName: "Caz", age: 24},
        {id: 3, firstName: "Seher", lastName: "Kaplan", age: 54},
        {id: 4, firstName: "Cemile", lastName: "Taspinar", age: 44},
    ]

  return (
    <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>ISIM</TableCell>
                    <TableCell>SOYISIM</TableCell>
                    <TableCell>YAS</TableCell>
                </TableRow>
            </TableHead>

            <TableBody>
                {rows.map((row, index) => (
                    <TableRow key={row.id}>
                        <TableCell>{row.id}</TableCell>
                        <TableCell>{row.firstName}</TableCell>
                        <TableCell>{row.lastName}</TableCell>
                        <TableCell>{row.age}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
  )
}

export default MUITable