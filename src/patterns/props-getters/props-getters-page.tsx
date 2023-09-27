import { Typography } from "@/components/typography";
import { Container } from "@/components/container";
import { Link } from "@/styles/link.styles";

import { UserTable } from "./components/user-table";
import { UserTableCustom } from "./components/user-table-custom";

export const PropsGettersPage = () => {
  return (
    <Container>
      <Typography variant="title">Props Getters</Typography>
      <Typography>
        Accede a la lección de Props Getters dando{" "}
        <Link href="https://www.youtube.com/watch?v=CMfPGVKw0yU&list=PLkr7dGY4D2sOyjBKXyNhtkIwO3suaqotD&index=10&ab_channel=Developero">
          click aquí.
        </Link>
      </Typography>
      <Typography variant="header">Ejemplo sin Props Getters</Typography>
      <UserTable />
      <Typography variant="header">Ejemplo con Props Getters</Typography>
      <UserTableCustom />
    </Container>
  );
};
