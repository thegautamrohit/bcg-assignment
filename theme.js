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

  components: {
    MuiSwitch: {
      styleOverrides: {
        switchBase: {
          // Controls default (unchecked) color for the thumb
          color: "#ccc",
        },
        colorPrimary: {
          "&.Mui-checked": {
            // Controls checked color for the thumb
            color: "#2284fd3d",
          },
        },
        track: {
          // Controls default (unchecked) color for the track
          opacity: 0.2,
          backgroundColor: "#fff",
          ".Mui-checked.Mui-checked + &": {
            // Controls checked color for the track
            opacity: 0.7,
            backgroundColor: "#2284fd3d",
          },
        },
      },
    },
  },
});

export default theme;
