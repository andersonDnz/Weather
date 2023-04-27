import styled from "styled-components";

import { FiSearch } from "react-icons/fi";

export const Search = styled.form`
  border: none;
  background-color: #1e1e1e;
  border-radius: 15px 15px;
  margin-left: 11rem;
  
`;

export const StyledSearch = styled(FiSearch)`
  color: white;
  margin-left: 10px;
`;

export const StyleInput = styled.div`
  width: 12rem;
  height: 35px;
  display: flex;
  background-color: #1e1e1e;
  border-radius: 15px;
  align-items: center;
`;
