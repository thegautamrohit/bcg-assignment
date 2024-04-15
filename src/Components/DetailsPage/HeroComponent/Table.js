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

function TableComponent({ sanitisedData }) {
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
        {sanitisedData?.aiForecast && (
          <TableBody>
            <TableRow>
              <TableCell sx={styles.tableCell}>AI Forecast</TableCell>
              {sanitisedData?.aiForecastHistoric.map((item, index) => (
                <TableCell sx={styles.tableCell} key={index}>
                  {item}
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell sx={styles.tableCell}>Final Forecast</TableCell>
              {sanitisedData?.finalForecastHistoric.map((item, index) => (
                <TableCell sx={styles.tableCell} key={index}>
                  {item}
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell sx={styles.tableCell}>Final Consumption</TableCell>
              {sanitisedData.finalConsumption.map((item, index) => (
                <TableCell sx={styles.tableCell} key={index}>
                  {item}
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell sx={styles.tableCell}>Ai Forecast</TableCell>
              {sanitisedData.aiForecast.map((item, index) => (
                <TableCell sx={styles.tableCell} key={index}>
                  {item}
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell sx={styles.tableCell}>Final Forecast</TableCell>
              {sanitisedData.aiForecast.map((item, index) => (
                <TableCell sx={styles.tableCell} key={index}>
                  {item}
                </TableCell>
              ))}
            </TableRow>
            <TableRow>
              <TableCell sx={styles.tableCell}>
                Previous Year Consumption
              </TableCell>
              {sanitisedData.finalConsumptionPrevious.map((item, index) => (
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
