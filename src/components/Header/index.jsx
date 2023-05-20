import React from "react";

import { ThemeProvider } from "styled-components";

import temaDark from "../../assets/theme"

import { 
  Navbar, 
  StyledBell, 
  StyledGrid, 
  StyledMapPin,
} from "./styles";


import InputSearch from "../InputSearch";
import ToggleSwitch from "../ToggleSwitch";
import Perfil from "../Perfil";

function Header() {
  return (
    <ThemeProvider theme={temaDark}>
      <Navbar>
        <StyledGrid />
        <StyledBell />
        <StyledMapPin />
        <InputSearch />
        <ToggleSwitch color="#1e1e1e"/>
        <Perfil/>
      </Navbar>
    </ThemeProvider>
  );
}
export default Header;
