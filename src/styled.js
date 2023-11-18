import styled from "styled-components";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  padding: 10px;
  &.active,
  &.visited,
  &.hover {
    color: ${({ theme }) => theme.colors.linkWater};
  }
`;

export const NavList = styled.ul`
  list-style: none;
  text-decoration: none;
  padding: 15px;
  background-color: ${({ theme }) => theme.colors.sindbad};
  display: flex;
  justify-content:center;
  font-size: 20px;
  font-weight: 300;
  font-family: "Montserrat", sans-serif;
  margin:0 auto;
`;
