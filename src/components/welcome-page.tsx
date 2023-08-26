import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 3rem;
`;

const Header = styled.h2`
  font-size: 2rem;
`;

const ListContainer = styled.ul`
  list-style: none;
  padding-left: 0;
  font-size: 1.2rem;
`;

const ListItem = styled.li`
  margin-bottom: 15px;
  padding-left: 1.5em;
  text-indent: -1.5em;

  &::before {
    content: "→ ";
    padding-right: 10px;
  }
`;

export const WelcomePage = () => {
  return (
    <Container>
      <div>
        <Title>Bienvenido al Curso</Title>
        <Title>Patrones Avanzados en React JS</Title>
      </div>
      <Header>¿Cómo aprovechar este curso?</Header>
      <ListContainer>
        <ListItem>
          Entra a este link para ver el curso en el canal de Youtube de
          Developero.
        </ListItem>
        <ListItem>
          Revisa la explicación de los patrones que te interesen.
        </ListItem>
        <ListItem>
          Accede al código fuente en este repositorio en la carpeta:
          /src/patterns.
        </ListItem>
        <ListItem>
          Suscríbete al canal de Youtube de Developero para recibir más cursos
          gratuitos <span role="img">⚛️</span>.
        </ListItem>
      </ListContainer>
    </Container>
  );
};
