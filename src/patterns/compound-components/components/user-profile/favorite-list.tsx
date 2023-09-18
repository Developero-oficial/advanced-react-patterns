import { FavoriteBooks } from "./favorite-books";
import { FavoriteMovies } from "./favorite-movies";

interface FavoriteListProps {
  books: string[];
  movies: string[];
}

export const FavoriteList = ({ books, movies }: FavoriteListProps) => (
  <div>
    <FavoriteBooks books={books} />
    <FavoriteMovies movies={movies} />
  </div>
);
