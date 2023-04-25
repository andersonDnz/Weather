import styled from "styled-components";

import { FiBell, FiGrid } from "react-icons/fi";

export const Navbar = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  background-color: #101014;
  margin-left: 15px;
`;

export const StyledGrid = styled(FiGrid)`
  color: white;
  padding: 9px;
  padding-left: 10px;
  height: 35px;
  width: 35px;
  background-color: #686767;
  border-radius: 100%;
  cursor: pointer;
`;

export const StyledBell = styled(FiBell)`
  color: white;
  padding: 9px;
  padding-left: 10px;
  margin-left: 65px;
  height: 35px;
  width: 35px;
  background-color: #686767;
  border-radius: 100%;
  cursor: pointer;
`;
