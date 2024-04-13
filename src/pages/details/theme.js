// theme.js

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#13262f", // Customize primary color
    },
    secondary: {
      main: "#f50057", // Customize secondary color
    },
    // Add custom colors as needed
    customColor: {
      main: "#4caf50", // Example of a custom color
    },
  },
});

export default theme;
