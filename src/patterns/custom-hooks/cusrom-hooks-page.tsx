import { Typography } from "@/components/typography";
import { Container } from "@/components/container";
import { Link } from "@/styles/link.styles";

import { TodoItem, TodoItemWithCustomHook } from "./components/todo-item";

export const CustomHooksPage = () => (
  <Container>
    <Typography variant="title">Custom Hook</Typography>
    <Typography>
      Accede a la lección de Custom Hook dando{" "}
      <Link
        href="https://www.youtube.com/watch?v=VJlANS3IPxg&list=PLkr7dGY4D2sOyjBKXyNhtkIwO3suaqotD&index=2&ab_channel=Developero"
        target="_blank"
      >
        click aquí.
      </Link>
    </Typography>
    <Typography variant="header">Ejemplo sin custom hook</Typography>
    <TodoItem />
    <Typography variant="header">Ejemplo con custom hook</Typography>
    <TodoItemWithCustomHook />
  </Container>
);
