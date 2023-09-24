import { Typography } from "@/components/typography";
import { Container } from "@/components/container";

import { UserTable } from "./components/user-table";
import { UserTableCustom } from "./components/user-table-custom";

export const PropsGettersPage = () => {
  return (
    <Container>
      <Typography variant="title">Props Getters</Typography>
      <Typography variant="header">Ejemplo sin Props Getters</Typography>
      <UserTable />
      <Typography variant="header">Ejemplo con Props Getters</Typography>
      <UserTableCustom />
    </Container>
  );
};
