import { Typography } from "@/components/typography";
import { Container } from "@/components/container";
import { LoginForm } from "./components/login-form";
import { Link } from "@/styles/link.styles";

import { LoginFormWithHoc } from "./components/login-form-with-hoc";

export const HocPage = () => (
  <Container>
    <Typography variant="title">HOC</Typography>
    <Typography>
      Accede a la lección de HOC dando{" "}
      <Link
        href="https://www.youtube.com/watch?v=YXsD4KRG-JI&list=PLkr7dGY4D2sOyjBKXyNhtkIwO3suaqotD&index=4&ab_channel=Developero"
        target="_blank"
      >
        click aquí.
      </Link>
    </Typography>
    <Typography variant="header">Ejemplo sin HOC</Typography>
    <LoginForm />
    <Typography variant="header">Ejemplo con HOC</Typography>
    <LoginFormWithHoc />
  </Container>
);
