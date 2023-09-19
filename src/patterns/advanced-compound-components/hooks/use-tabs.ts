import React from "react";

import { TabContext } from "../contexts/tabs-context";

export const useTabs = () => {
  const context = React.useContext(TabContext);

  if (!context) {
    throw new Error("useTabs must be used within a <TabsProvider />");
  }

  return context;
};
