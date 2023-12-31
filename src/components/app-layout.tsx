import styled from "styled-components";
import { Outlet } from "react-router-dom";

import { SideNav } from "./side-nav";

const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: ${(props) => props.theme.backgrounds.primary};
  color: ${(props) => props.theme.colors.text};

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const MainContent = styled.div`
  flex: 1;
  background-color: ${(props) => props.theme.backgrounds.quaternary};
  padding: 20px;
  overflow-y: auto;

  @media (max-width: 768px) {
    flex: none;
  }
`;

export const AppLayout = () => (
  <LayoutContainer>
    <SideNav />
    <MainContent>
      <Outlet />
    </MainContent>
  </LayoutContainer>
);
