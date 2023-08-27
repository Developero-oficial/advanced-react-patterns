import { Typography } from "@/components/typography";
import { Container } from "@/components/container";
import { TodoItem, TodoItemWithCustomHook } from "./components/todo-item";

export const CustomHooksPage = () => (
  <Container>
    <Typography variant="title">Custom Hook</Typography>
    <Typography variant="header">Ejemplo sin custom hook</Typography>
    <TodoItem />
    <Typography variant="header">Ejemplo con custom hook</Typography>
    <TodoItemWithCustomHook />
  </Container>
);
