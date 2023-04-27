import React from "react";

import { Navbar, StyledBell, StyledGrid, StyledMapPin } from "./styles";
import InputSearch from "../InputSearch";



function Header() {
  return (
    <>
      <Navbar>
        <StyledGrid />
        <StyledBell />
        <StyledMapPin />
        <InputSearch/>
      </Navbar>
      
    </>
  );
}
export default Header;
