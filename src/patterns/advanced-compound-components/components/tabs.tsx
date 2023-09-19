import { useState } from "react";

import { TabsContainer, TabList, TabListItem, TabPanel } from "@components/tab";

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
}

export const Tabs = ({ tabs }: TabsProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <TabsContainer>
      <TabList>
        {tabs.map((tab, index) => (
          <TabListItem
            active={index === activeIndex}
            key={index}
            onClick={() => setActiveIndex(index)}
          >
            {tab.label}
          </TabListItem>
        ))}
      </TabList>
      <TabPanel>{tabs[activeIndex].content}</TabPanel>
    </TabsContainer>
  );
};
