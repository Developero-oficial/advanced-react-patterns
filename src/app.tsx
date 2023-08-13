import { ThemeProvider } from "styled-components";
import "typeface-roboto";

import { appTheme } from "./app-theme";
import { AppRouter } from "./components/app-router";
import { ResetStyles } from "./components/reset-styles";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <ResetStyles />
      <AppRouter />
    </ThemeProvider>
  );
}

export default App;
