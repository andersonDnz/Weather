import React from "react";

import { ThemeProvider } from "styled-components";

import tema from "../../theme/theme";

import { Navbar, StyledBell, StyledGrid, StyledMapPin } from "./styles";

import InputSearch from "../InputSearch";
import ToggleSwitch from "../ToggleSwitch";
import Perfil from "../Perfil";

function Header() {
  return (
    <ThemeProvider theme={tema}>
      <Navbar>
        <StyledGrid />
        <StyledBell />
        <StyledMapPin />
        <InputSearch />
        <ToggleSwitch color="#1e1e1e" />
        <Perfil />
      </Navbar>
    </ThemeProvider>
  );
}
export default Header;
