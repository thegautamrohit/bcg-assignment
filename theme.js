import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#13262f", // Customize primary color
    },
    secondary: {
      main: "#00FFFF", // Customize secondary color
    },
    // Add custom colors as needed
    customColor: {
      main: "#000", // Example of a custom color
    },
    bgColor: {
      main: "#020a12",
    },
    tabColor: {
      main: "#fff",
    },
  },
});

export default theme;
