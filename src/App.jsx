import React from "react";

import { ThemeProvider, createGlobalStyle } from "styled-components";

const GLobalStyle = createGlobalStyle`
html,
body,
#root {
  height: 100%;
  padding: 0;
  margin: 0;
  box-sizing: "border-box";
  font-family: "Open Sans", sans-serif;
  background-color: #151418;
}
`;

import Pages from "./pages";
import tema from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={tema}>
      <GLobalStyle />
      <div className="App">
        <Pages />
      </div>
    </ThemeProvider>
  );
}

export default App;
