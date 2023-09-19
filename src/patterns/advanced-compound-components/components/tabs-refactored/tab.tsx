import { useTabs } from "../../hooks/use-tabs";

import { TabListItem } from "@/components/tab";

interface TabsProps {
  children: React.ReactNode;
  index: number;
}

export const Tab = ({ children, index }: TabsProps) => {
  const { activeIndex, onSelectTab } = useTabs();

  return (
    <TabListItem
      active={index === activeIndex}
      onClick={() => onSelectTab(index)}
    >
      {children}
    </TabListItem>
  );
};
