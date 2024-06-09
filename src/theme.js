import { createTheme } from "@mui/material/styles";

// Define your custom theme
const theme = createTheme({
  palette: {
    primary: {
      main: "#FFC300", // Change primary color
    },
    secondary: {
      main: "#dc004e", // Change secondary color
    },
  },
  typography: {
    fontFamily: [
      'Roboto', // Use Roboto as the default font
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ].join(','),
  },
});

export default theme;
