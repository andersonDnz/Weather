import React from "react";

import { FiBell, FiGrid, FiMapPin, FiSearch } from "react-icons/fi";

import { Wrapper } from "./styles";

function Header() {
  return (
    <Wrapper>
      <FiGrid />
      <FiBell />
      <FiMapPin />
      <FiSearch/> 
      <input type="search"placeholder="Search city..." />
    </Wrapper>
  );
}
export default Header;
