import styled from "styled-components";

const NavContainer = styled.div`
  width: 250px;
  background-color: ${(props) => props.theme.backgrounds.primary};
  color: ${(props) => props.theme.colors.text};
  display: flex;
  flex-direction: column;
  padding: 20px 0;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.colors.text};
  padding: 10px 20px;
  font-size: 16px;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${(props) => props.theme.backgrounds.quaternary};
  }
`;

export const SideNav = () => {
  return (
    <NavContainer>
      <NavLink href="#home">Home</NavLink>
      <NavLink href="#about">About</NavLink>
      <NavLink href="#projects">Projects</NavLink>
      <NavLink href="#contact">Contact</NavLink>
    </NavContainer>
  );
};
