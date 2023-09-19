import { Typography } from "@/components/typography";
import { Container } from "@/components/container";
import { ErrorBoundary } from "@/components/error-boundary";
import { MyBug } from "./components/my-bug";
import { Button } from "@/styles/form.styles";
import { Link } from "@/styles/link.styles";

export const RenderPropsPage = () => (
  <Container>
    <Typography variant="title">Render Props</Typography>
    <Typography>
      Accede a la lección de Render Props dando{" "}
      <Link
        href="https://www.youtube.com/watch?v=TTOfKSh1Fyk&list=PLkr7dGY4D2sOyjBKXyNhtkIwO3suaqotD&index=8&ab_channel=Developero"
        target="_blank"
      >
        click aquí.
      </Link>
    </Typography>
    <Typography variant="header">Ejemplo sin Render Props</Typography>
    <ErrorBoundary>
      <Container maxWidth="200px">
        <MyBug />
      </Container>
    </ErrorBoundary>
    <Typography variant="header">Ejemplo con Render Props</Typography>
    <ErrorBoundary
      renderOnError={({ error, resetError }) => (
        <>
          <Typography>Ups, hubo un error: {error?.message}</Typography>
          <Button onClick={resetError}>Reset</Button>
        </>
      )}
    >
      <Container maxWidth="200px">
        <MyBug />
      </Container>
    </ErrorBoundary>
  </Container>
);
