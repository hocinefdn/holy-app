import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
//pages

import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import { useEffect } from "react";

const theme = createTheme({
  palette: {
    primary: {
      light: "#ff9800",
      main: "#fff",
      dark: "#002884",
      contrastText: "#000",
    },
    secondary: {
      light: "#ff7961",
      main: "#E74C3C",
      dark: "#ba000d",
      contrastText: "#000",
    },
    success: {
      light: "#58D68D",
      main: "#2ECC71",
      dark: "#82E0AA",
      contrastText: "#000",
    },
  },
});

function App() {
  useEffect(() => {
    const importTE = async () => {
      await import("tw-elements");
    };
    importTE();
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <div className="app">
        <Router>
          {/* #########  Routes  ######## */}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:shopSlug" element={<ShopPage />} />
            <Route path="/:shopSlug/articles/:article" element={<ShopPage />} />

            {/* -------------  404 error page  ------------- */}
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;
