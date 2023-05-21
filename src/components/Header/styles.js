import styled from "styled-components";

import { FiBell, FiGrid, FiMapPin } from "react-icons/fi";

export const Navbar = styled.nav`
  color: ${(props) => props.theme.colors.white};
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  background-color: ${(props) => props.theme.colors.primary};
`;

export const StyledGrid = styled(FiGrid)`
  padding: 9px;
  padding-left: 10px;
  background-color: #1e1e1e;
  border-radius: 100%;
  cursor: pointer;
`;

export const StyledBell = styled(FiBell)`
  padding: 9px;
  padding-left: 10px;
  margin-left: 65px;
  background-color: #1e1e1e;
  border-radius: 100%;
  cursor: pointer;
`;

export const StyledMapPin = styled(FiMapPin)`
  padding: 9px;
  padding-left: 10px;
  margin-left: 65px;
  border-radius: 100%;
  cursor: pointer;
`;
