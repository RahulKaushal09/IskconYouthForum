// react-router components
import { Routes, Route, Navigate } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "../src/assets/theme_kit";
// Material Dashboard 2 React routes
import routes from "../src/routes";

export default function App() {
  const getRoutes = (allRoutes) =>
    allRoutes.map((route) => {
      return (
        <Route path={route.route} element={route.component} key={route.key} />
      );
    });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        {getRoutes(routes)}
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </ThemeProvider>
  );
}
