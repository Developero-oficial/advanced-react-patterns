import React from "react";

interface TabContextValues {
  activeIndex: number;
  onSelectTab: (index: number) => void;
}

export const TabContext = React.createContext<TabContextValues>({
  activeIndex: 0,
  onSelectTab: () => {},
});
