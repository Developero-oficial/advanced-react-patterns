import styled from "styled-components";

interface ContainerProps {
  maxWidth?: string;
}

export const Container = styled.div
  .attrs<ContainerProps>(() => ({}))
  .withConfig({
    shouldForwardProp: (prop) => !["maxWidth"].includes(prop),
  })<ContainerProps>`
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding: 20px;
  max-width: ${(props) => props.maxWidth || "none"};
`;
