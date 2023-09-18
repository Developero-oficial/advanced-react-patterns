import { Typography } from "@/components/typography";
import { Container } from "@/components/container";
import { UserDataContainer } from "@/components/user";
import { ListContainer, ListTitle, ListItem } from "@/components/list";

import { UserProfile } from "./components/user-profile/user-profile";
import { UserInfo } from "./components/user-profile/user-info";
import { Link } from "@/styles/link.styles";

interface UserListDataProps {
  data: string[];
  title: string;
}

export const UserListData = ({ data, title }: UserListDataProps) => (
  <ListContainer>
    <ListTitle>{title}</ListTitle>
    <ul>
      {data.map((movie, index) => (
        <ListItem key={index}>{movie}</ListItem>
      ))}
    </ul>
  </ListContainer>
);

const mockUserData = {
  name: "John Doe",
  age: 30,
};
const mockUserFavoriteBooks = ["1984", "Brave New World"];
const mockUserFavoriteMovies = ["Inception", "The Matrix"];

export const CompoundComponentsPage = () => (
  <Container>
    <Typography variant="title">Compound Components</Typography>
    <Typography>
      Accede a la lección de Custom Hook dando{" "}
      <Link
        href="https://www.youtube.com/watch?v=kEq36QY3PUM&list=PLkr7dGY4D2sOyjBKXyNhtkIwO3suaqotD&index=6&ab_channel=Developero"
        target="_blank"
      >
        click aquí.
      </Link>
    </Typography>

    <Typography variant="header">Ejemplo sin compound components</Typography>
    <Container maxWidth="250px">
      <UserProfile
        user={mockUserData}
        favoriteBooks={mockUserFavoriteBooks}
        favoriteMovies={mockUserFavoriteMovies}
      />
    </Container>

    <Typography variant="header">Ejemplo con compound components</Typography>
    <Container maxWidth="250px">
      <UserDataContainer>
        <UserInfo age={mockUserData.age} name={mockUserData.name} />
        <div>
          <UserListData title="Favorite books:" data={mockUserFavoriteBooks} />
          <UserListData
            title="Favorite movies:"
            data={mockUserFavoriteMovies}
          />
        </div>
      </UserDataContainer>
    </Container>
  </Container>
);
