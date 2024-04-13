import React from "react";
import Box from "@mui/material/Box";
import Header from "./Header";
import ChartComponent from "./Chart";
import Table from "./Table";

function HeroComponent() {
  const data = [
    { label: "Jan", value: 10, isDotted: false },
    { label: "Feb", value: 15, isDotted: false },
    { label: "Mar", value: 12, isDotted: true }, // This segment will be dotted
    { label: "Apr", value: 18, isDotted: false },
    { label: "May", value: 16, isDotted: false },
  ];

  const headers = ["Header 1", "Header 2", "Header 3"];
  const rows = [
    ["Row 1 Cell 1", "Row 1 Cell 2", "Row 1 Cell 3"],
    ["Row 2 Cell 1", "Row 2 Cell 2", "Row 2 Cell 3"],
    ["Row 3 Cell 1", "Row 3 Cell 2", "Row 3 Cell 3"],
  ];

  return (
    <div>
      <Header />
      <ChartComponent data={data} />
      <Table headers={headers} rows={rows} />
    </div>
  );
}

export default HeroComponent;
