import { ListContainer, ListTitle, ListItem } from "@/components/list";

interface FavoriteMoviesProps {
  movies: string[];
}

export const FavoriteMovies = ({ movies }: FavoriteMoviesProps) => (
  <ListContainer>
    <ListTitle>Favorite Movies:</ListTitle>
    <ul>
      {movies.map((movie, index) => (
        <ListItem key={index}>{movie}</ListItem>
      ))}
    </ul>
  </ListContainer>
);
