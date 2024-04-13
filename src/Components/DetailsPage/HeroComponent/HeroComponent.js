import React from "react";
import Box from "@mui/material/Box";
import Header from "./Header";
import ChartComponent from "./Chart";

function HeroComponent() {
  const data = [
    { label: "Jan", value: 10, isDotted: false },
    { label: "Feb", value: 15, isDotted: false },
    { label: "Mar", value: 12, isDotted: true }, // This segment will be dotted
    { label: "Apr", value: 18, isDotted: false },
    { label: "May", value: 16, isDotted: false },
  ];

  return (
    <div>
      <Header />
      <ChartComponent data={data} />
    </div>
  );
}

export default HeroComponent;
