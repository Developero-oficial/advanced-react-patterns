import { Typography } from "@/components/typography";
import { Container } from "@/components/container";
import { TabList } from "@/components/tab";

import { Tabs } from "./components/tabs";
import { Tabs as TabsRefactored } from "./components/tabs-refactored/tabs";
import { Tab } from "./components/tabs-refactored/tab";
import { TabContent } from "./components/tabs-refactored/tab-content";

const tabs = [
  { label: "Tab 1", content: <h2>Content 1</h2> },
  { label: "Tab 2", content: <h2>Content 2</h2> },
];

export const AdvancedCompoundComponentsPage = () => (
  <Container>
    <Typography variant="title">Advanced Compound Components</Typography>
    <Typography variant="header">
      Ejemplo sin Advanced Compund Components
    </Typography>

    <Tabs tabs={tabs} />

    <Typography variant="header">
      Ejemplo con Advanced Compund Components
    </Typography>

    <TabsRefactored>
      <TabList>
        <Tab index={0}>Content 1</Tab>
        <Tab index={1}>Content 2</Tab>
        <Tab index={2}>Content 3</Tab>
      </TabList>

      <TabContent index={0}>Suscríbete joder!</TabContent>
      <TabContent index={1}>Developero!</TabContent>
      <TabContent index={2}>Hello world!</TabContent>
    </TabsRefactored>
  </Container>
);
