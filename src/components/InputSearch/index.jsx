import React from "react";

import { 
  Search, 
  Label, 
  StyledSearch, 
  Input } from "./styles";

function InputSearch() {
  return (
    <Search>
      <div>
      <Label htmlFor="text">
      <StyledSearch/>
      </Label>
      <Input type="search" placeholder="Search city..." />
      </div>
    </Search>
  );
}

export default InputSearch;
