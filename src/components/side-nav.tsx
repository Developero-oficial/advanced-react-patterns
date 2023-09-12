import styled from "styled-components";
import { Link } from "react-router-dom";

import { navLinks } from "../nav-links";

const NavContainer = styled.div`
  width: 250px;
  background-color: ${(props) => props.theme.backgrounds.primary};
  color: ${(props) => props.theme.colors.text};
  display: flex;
  flex-direction: column;
  padding: 20px 0;

  @media (max-width: 768px) {
    width: 100%;
    flex: none;
  }
`;

const NavLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.text};
  padding: 10px 20px;
  font-size: 16px;
  transition: background-color 0.3s;
  letter-spacing: 0.02em;
  line-height: 1.5;

  &:hover {
    background-color: ${(props) => props.theme.backgrounds.quaternary};
  }
`;

export const SideNav = () => {
  return (
    <NavContainer>
      {navLinks.map((navLink) => (
        <NavLink key={navLink.to} to={navLink.to}>
          {navLink.label}
        </NavLink>
      ))}
    </NavContainer>
  );
};
