import React from "react";

import { FiMapPin, FiSearch } from "react-icons/fi";

import { Navbar, StyledBell, StyledGrid } from "./styles";

function Header() {
  return (
    <>
      <Navbar>
        <StyledGrid />
        <StyledBell />
      </Navbar>
    </>
  );
}
export default Header;
