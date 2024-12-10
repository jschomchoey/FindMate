import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#17ca9e",
    },
    secondary: {
      main: "#ffffff",
    },
  },
  shape: {
    borderRadius: 12, // To achieve curved borders
  },
});

export default theme;
