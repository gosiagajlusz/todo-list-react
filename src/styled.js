import styled from "styled-components";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

export const StyledNavLink= styled(NavLink)`
&.active {    
    color: ${({ theme }) => theme.colors.nileBlue};
}
`

export const NavList = styled.ul`
list-style: none;`