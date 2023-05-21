import React from "react";

import { ThemeProvider, createGlobalStyle } from "styled-components";

const GLobalStyle = createGlobalStyle`
html,
body,
#root {
  padding: 0;
  margin: 0;
  box-sizing: "border-box";
  font-family: "Open Sans", sans-serif;
  background-color: #151418;
  height: 100%;
}
`;

import Pages from "./pages";
import tema from "./components/theme";

function App() {
  return (
    <ThemeProvider theme={tema}>
      <GLobalStyle/>
      <div className="App">
        <Pages />
      </div>
    </ThemeProvider>
  );
}

export default App;
