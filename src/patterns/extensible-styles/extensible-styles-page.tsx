import { Typography } from "@/components/typography";
import { Container } from "@/components/container";
import { Link } from "@/styles/link.styles";

import { NormalButton } from "./components/normal-button";
import { CustomButton } from "./components/custom-button";

export const ExtensibleStylesPage = () => {
  return (
    <Container>
      <Typography variant="title">Extensible Styles</Typography>
      <Typography>
        Accede a la lección de HOC dando{" "}
        <Link
          href="https://www.youtube.com/watch?v=gkLx5qMs53A&list=PLkr7dGY4D2sOyjBKXyNhtkIwO3suaqotD&index=5&ab_channel=Developero"
          target="_blank"
        >
          click aquí.
        </Link>
      </Typography>
      <Typography variant="header">Ejemplo sin el patrón</Typography>
      <Container maxWidth="300px">
        <NormalButton>Normal button</NormalButton>
      </Container>
      <Typography variant="header">Ejemplo con el patrón</Typography>
      <Container maxWidth="300px">
        <CustomButton
          className="button button--warning"
          style={{ color: "white" }}
        >
          Custom button
        </CustomButton>
      </Container>
    </Container>
  );
};
