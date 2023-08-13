import React from "react";
import styled from "styled-components";

import { SideNav } from "./side-nav";

const LayoutContainer = styled.div`
  display: flex;
  height: 100vh;
  background-color: ${(props) => props.theme.backgrounds.primary};
  color: ${(props) => props.theme.colors.text};
`;

const MainContent = styled.div`
  flex: 1;
  background-color: ${(props) => props.theme.backgrounds.quaternary};
  padding: 20px;
  overflow-y: auto;
`;

interface AppLayoutProps {
  children: React.ReactNode;
}

export const AppLayout = ({ children }: AppLayoutProps) => (
  <LayoutContainer>
    <SideNav />
    <MainContent>{children}</MainContent>
  </LayoutContainer>
);
