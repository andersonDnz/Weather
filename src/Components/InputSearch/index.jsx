import React from "react";

import { Search, StyledSearch, StyleInput } from "./styles";

function InputSearch() {
  return (
    <Search>
      <StyleInput>
        <form>
          <div>
            <label htmlFor="text">
              <StyledSearch />
            </label>
            <input type="search" placeholder="Search city..."></input>
          </div>
        </form>
      </StyleInput>
    </Search>
  );
}

export default InputSearch;
