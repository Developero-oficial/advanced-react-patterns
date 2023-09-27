import { Typography } from "@/components/typography";
import { Container } from "@/components/container";
import { Link } from "@/styles/link.styles";

import { FormWithoutPattern } from "./components/form-without-pattern";

export const StateInitializerPage = () => {
  return (
    <Container>
      <Typography variant="title">State Initializer</Typography>
      <Typography>
        Accede a la lección de State Initializer dando{" "}
        <Link href="https://www.youtube.com/watch?v=J-l97FzHAW4&list=PLkr7dGY4D2sOyjBKXyNhtkIwO3suaqotD&index=11&ab_channel=Developero">
          click aquí.
        </Link>
      </Typography>
      <Typography variant="header">Ejemplo con State Initializer</Typography>
      <FormWithoutPattern defaultName="john" />
    </Container>
  );
};
