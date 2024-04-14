import React from "react";
import Box from "@mui/material/Box";
import Header from "./Header";
import ChartComponent from "./Chart";
import Table from "./Table";

function HeroComponent({ selectedStack }) {
  const headers = ["Header 1", "Header 2", "Header 3"];
  const rows = [
    ["Row 1 Cell 1", "Row 1 Cell 2", "Row 1 Cell 3"],
    ["Row 2 Cell 1", "Row 2 Cell 2", "Row 2 Cell 3"],
    ["Row 3 Cell 1", "Row 3 Cell 2", "Row 3 Cell 3"],
  ];

  return (
    <div>
      <Header />
      <ChartComponent selectedStack={selectedStack} />
      <Table headers={headers} rows={rows} />
    </div>
  );
}

export default HeroComponent;
