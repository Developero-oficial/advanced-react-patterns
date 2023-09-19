import React from "react";

import { TabContext } from "../../contexts/tabs-context";

export const Tabs = ({ children }: { children: React.ReactNode }) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const onSelectTab = (index: number) => {
    setActiveIndex(index);
  };

  const value = {
    activeIndex,
    onSelectTab,
  };

  return <TabContext.Provider value={value}>{children}</TabContext.Provider>;
};
