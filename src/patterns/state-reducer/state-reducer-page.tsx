import { Typography } from "@/components/typography";
import { Container } from "@/components/container";

import { Player } from "./components/player";
import { Link } from "@/styles/link.styles";

export const StateReducerPage = () => {
  return (
    <Container>
      <Typography variant="title">State Reducer</Typography>
      <Typography>
        Accede a la lección de State Reducer dando{" "}
        <Link href="https://www.youtube.com/watch?v=kcTHSoF92eg&list=PLkr7dGY4D2sOyjBKXyNhtkIwO3suaqotD&index=12&ab_channel=Developero">
          click aquí.
        </Link>
      </Typography>

      <Typography variant="header">Ejemplo de State Reducer</Typography>
      <Container maxWidth="300px">
        <Player />
      </Container>
    </Container>
  );
};
