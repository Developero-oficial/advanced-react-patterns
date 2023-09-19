import { HTMLProps } from "react";
import styled from "styled-components";

export const TabsContainer = styled.div`
  width: 100%;
`;

export const TabList = styled.ul`
  display: flex;
  justify-content: flex-start;
  list-style-type: none;
  padding: 0;
  margin: 0;
`;

interface TabListItemProps extends HTMLProps<HTMLLIElement> {
  active?: boolean;
}

export const TabListItem = styled.li<TabListItemProps>`
  padding: 15px;
  cursor: pointer;
  background: ${(props) => (props.active ? "#555" : "transparent")};

  &:hover {
    background: #555;
  }
`;

export const TabPanel = styled.div`
  padding: 20px;
`;
