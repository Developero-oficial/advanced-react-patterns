import { ThemeProvider } from "styled-components";
import "typeface-roboto";

import { appTheme } from "./app-theme";
import { AppLayout } from "./components/app-layout";
import { ResetStyles } from "./components/reset-styles";

function App() {
  return (
    <ThemeProvider theme={appTheme}>
      <ResetStyles />
      <AppLayout>
        <h1>Hello</h1>
      </AppLayout>
    </ThemeProvider>
  );
}

export default App;
