import { ThemeProvider } from "styled-components";

import { synthwaveTheme } from "./synth-wave-theme";

function App() {
  return (
    <ThemeProvider theme={synthwaveTheme}>
      <h1>Hello</h1>
    </ThemeProvider>
  );
}

export default App;
