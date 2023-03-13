import {
  Container,
  createTheme,
  CssBaseline,
  ThemeProvider,
} from "@mui/material";
import { SignIn } from "./pages/SignIn";
import { AppRoutes } from "./routes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AppProvider } from "./context";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
      light: "#c3fdff",
      dark: "#5d99c6",
    },
    secondary: {
      main: "#f48fb1",
      light: "#ffc1e3",
      dark: "#bf5f82",
    },
    error: {
      main: "#f44336",
      light: "#ff7961",
      dark: "#ba000d",
    },
    warning: {
      main: "#ff9800",
      light: "#ffc947",
      dark: "#c66900",
    },
    info: {
      main: "#2196f3",
      light: "#6ec6ff",
      dark: "#0069c0",
    },
    success: {
      main: "#4caf50",
      light: "#80e27e",
      dark: "#087f23",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#fff",
      secondary: "#f0f0f0",
      disabled: "#9e9e9e",
    },
    action: {
      active: "#fff",
      hover: "#bdbdbd",
      selected: "#616161",
      disabled: "#bdbdbd",
      disabledBackground: "#e0e0e0",
    },
  },
});
function App() {
  return (
    <AppProvider>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Container>
          <AppRoutes />
        </Container>
        <ToastContainer />
      </ThemeProvider>
    </AppProvider>
  );
}

export default App;
