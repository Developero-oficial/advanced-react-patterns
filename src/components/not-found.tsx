import styled from "styled-components";

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
      <ErrorCode>404</ErrorCode>
      <Message>
        ¡Ups! Parece que esta página no existe o ha sido movida.
        <br />
        Por favor, comprueba la URL o vuelve a la página de inicio.
      </Message>
    </NotFoundWrapper>
  );
};
