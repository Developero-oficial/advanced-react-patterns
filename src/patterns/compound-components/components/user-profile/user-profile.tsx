import { UserInfo } from "./user-info";
import { FavoriteList } from "./favorite-list";

import { UserDataContainer } from "@/components/user";

interface UserProfileProps {
  user: {
    name: string;
    age: number;
  };
  favoriteBooks: string[];
  favoriteMovies: string[];
}

export const UserProfile = ({
  user,
  favoriteBooks,
  favoriteMovies,
}: UserProfileProps) => {
  return (
    <UserDataContainer>
      <UserInfo name={user.name} age={user.age} />
      <FavoriteList books={favoriteBooks} movies={favoriteMovies} />
    </UserDataContainer>
  );
};
