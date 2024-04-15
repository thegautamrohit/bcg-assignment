import React from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  Paper,
  TableBody,
} from "@mui/material";

const styles = {
  table: {
    minWidth: 650,
    display: "block",
    overflowX: "auto",
  },
  tableCell: {
    width: 150,
    padding: "16px",
    color: "#fff",
    fontWeight: "semibold",
  },
};

function TableComponent({ tableData }) {
  return (
    <TableContainer
      component={Paper}
      sx={{
        backgroundColor: "#082f41",
        width: "100%",
        display: "table",
        tableLayout: "fixed",
      }}
    >
      <Table sx={styles.table} aria-label="simple table">
        <TableHead></TableHead>
        {tableData?.aiForecast && (
          <TableBody>
            <TableRow>
              <TableCell sx={styles.tableCell}>AI Forecast</TableCell>
              {tableData?.aiForecast.map((item, index) => (
                <TableCell sx={styles.tableCell} key={index}>
                  {item}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell sx={styles.tableCell}>Final Forecast</TableCell>
              {tableData?.finalForecast.map((item, index) => (
                <TableCell sx={styles.tableCell} key={index}>
                  {item}
                </TableCell>
              ))}
            </TableRow>

            <TableRow>
              <TableCell sx={styles.tableCell}>Final Consumption</TableCell>
              {tableData.consumption.map((item, index) => (
                <TableCell sx={styles.tableCell} key={index}>
                  {item}
                </TableCell>
              ))}
            </TableRow>
          </TableBody>
        )}
      </Table>
    </TableContainer>
  );
}

export default TableComponent;
