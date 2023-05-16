import styled from "styled-components";

import { FiSearch } from "react-icons/fi";

export const Search = styled.div`
  display: flex;
  border: none;
  background-color: #1e1e1e;
  border-radius: 20px 20px;
  margin-left: 10rem;
  width: 25rem;
  height: 40px;
  align-items: center;
`;

export const Label = styled.label`
  margin-left: 9px;
  height: 40px;
  align-items: center;
`

export const StyledSearch = styled(FiSearch)`
  color: white;
`;

export const Input = styled.input`
  min-width: 345px;
  height: 34px;
  color: white;
  margin-left: 25px;
  background-color: #1e1e1e;
  border-radius: 15px;
  border: none;
  align-items: center;
`;
