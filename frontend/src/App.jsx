import { ThemeProvider } from "styled-components";
import Header from "./components/Header/Header";
import GlobalStyles from "./styles/GlobalStyles";
import { theme } from "./styles/theme";
import AppRoutes from "./routes/AppRoutes";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HashRouter>
        <GlobalStyles />
        <Header />
        <AppRoutes />
      </HashRouter>
    </ThemeProvider>
  );
}

export default App;
