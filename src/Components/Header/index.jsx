import React from "react";

import { Navbar, StyledBell, StyledGrid, StyledMapPin } from "./styles";

import InputSearch from "../InputSearch";

import ToggleSwitch from "../ToggleSwitch";

function Header() {
  return (
    <>
      <Navbar>
        <StyledGrid />
        <StyledBell />
        <StyledMapPin />
        <InputSearch />
      </Navbar>
    </>
  );
}
export default Header;
