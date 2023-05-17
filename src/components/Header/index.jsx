import React from "react";

import { 
  Navbar, 
  StyledBell, 
  StyledGrid, 
  StyledMapPin 
} from "./styles";


import InputSearch from "../InputSearch";
import ToggleSwitch from "../ToggleSwitch";
import Perfil from "../Perfil";

function Header() {
  return (
    <>
      <Navbar>
        <StyledGrid />
        <StyledBell />
        <StyledMapPin />
        <InputSearch />
        <ToggleSwitch color="#1e1e1e"/>
        <Perfil/>
      </Navbar>
    </>
  );
}
export default Header;
