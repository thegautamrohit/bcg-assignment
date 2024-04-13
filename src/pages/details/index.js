import dynamic from "next/dynamic";
const DetailsPage = dynamic(
  () => import("../../Components/DetailsPage/DetailsPage"),
  { ssr: false }
);
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";

function Index() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <DetailsPage />
      </ThemeProvider>
    </>
  );
}

export default Index;
