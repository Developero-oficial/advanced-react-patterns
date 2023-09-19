import React from "react";

import { useTabs } from "../../hooks/use-tabs";

interface TabContentProps {
  children: React.ReactNode;
  index: number;
}

export const TabContent = ({ children, index }: TabContentProps) => {
  const { activeIndex } = useTabs();

  return activeIndex === index ? children : null;
};
