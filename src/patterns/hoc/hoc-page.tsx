import { Typography } from "@/components/typography";
import { Container } from "@/components/container";
import { LoginForm } from "./components/login-form";
import { LoginFormWithHoc } from "./components/login-form-with-hoc";

export const HocPage = () => (
  <Container>
    <Typography variant="title">HOC</Typography>
    <Typography variant="header">Ejemplo sin HOC</Typography>
    <LoginForm />
    <Typography variant="header">Ejemplo con HOC</Typography>
    <LoginFormWithHoc />
  </Container>
);
