import * as React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  TableBody,
} from "@mui/material";

const data = [
  { name: "John Doe", age: 30, city: "New York" },
  { name: "Jane Doe", age: 25, city: "Los Angeles" },
];

const styles = {
  tableContainer: {
    maxHeight: 400,
  },
  tableCell: {
    width: 150,
    padding: "0 16px",
  },
  headerRow: {
    position: "sticky",
    top: 0,
    backgroundColor: "#f5f5f5",
    whiteSpace: "nowrap",
  },
  rotate: {
    transform: "rotate(-90deg)",
    transformOrigin: "0 0",
  },
};

function TableComponent() {
  return (
    <TableContainer component={Paper} sx={styles.tableContainer}>
      <Table stickyHeader>
        <TableHead>
          <TableRow sx={styles.headerRow}>
            <TableCell sx={[styles.tableCell, styles.rotate]}>Name</TableCell>
            <TableCell sx={styles.tableCell}>Age</TableCell>
            <TableCell sx={styles.tableCell}>City</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.age}</TableCell>
              <TableCell>{row.city}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default TableComponent;
