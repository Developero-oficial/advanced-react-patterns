import { ListContainer, ListTitle, ListItem } from "@/components/list";

interface FavoriteBooksProps {
  books: string[];
}

export const FavoriteBooks = ({ books }: FavoriteBooksProps) => (
  <ListContainer>
    <ListTitle>Favorite Books:</ListTitle>
    <ul>
      {books.map((book, index) => (
        <ListItem key={index}>{book}</ListItem>
      ))}
    </ul>
  </ListContainer>
);
