import React from "react";

import { Search, Label, StyledSearch, Input } from "./styles";

function InputSearch() {
  return (
    <Search>
        <form>
          <div>
            <Label htmlFor="text">
              <StyledSearch />
            </Label>
            <Input type="search" placeholder="Search city..."></Input>
          </div>
        </form>
    </Search>
  );
}

export default InputSearch;
