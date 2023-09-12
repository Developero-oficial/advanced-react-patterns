import styled from "styled-components";

import { Link } from "@/styles/link.styles";

const NotFoundWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  font-family: "Roboto", sans-serif;
`;

const ErrorCode = styled.div`
  font-size: 72px;
  font-weight: bold;
  margin-bottom: 20px;
  color: ${(props) => props.theme.colors.secondary};
`;

const Message = styled.div`
  font-size: 24px;
  text-align: center;
  max-width: 60%;
`;

export const NotFound = () => {
  return (
    <NotFoundWrapper>
      <ErrorCode>Clase en progreso</ErrorCode>
      <Message>
        Esta clase aún no está disponible
        <br />
        No hay un calendario fijo para la publicación de las clases, pero voy
        publicando en el{" "}
        <Link href="https://www.youtube.com/c/developero" target="_blank">
          canal de Developero
        </Link>
      </Message>
    </NotFoundWrapper>
  );
};
