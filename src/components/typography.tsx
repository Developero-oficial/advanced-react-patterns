import { ReactNode } from "react";
import styled, { css } from "styled-components";

type Variant = "title" | "header";

interface TypographyProps {
  variant?: Variant;
  children: ReactNode;
}

const TypographyStyles = styled("div")
  .withConfig({
    shouldForwardProp: (prop) => !["variant"].includes(prop),
  })
  .attrs<TypographyProps>((props) => ({
    as: props.variant === "title" ? "h1" : "h2",
  }))`
  ${({ variant }) => {
    switch (variant) {
      case "title":
        return css`
          font-size: 2rem;
          font-weight: 700;
        `;
      case "header":
        return css`
          font-size: 1.5rem;
          font-weight: 600;
        `;
      default:
        return css`
          font-size: 1rem;
          font-weight: 400;
        `;
    }
  }}
`;

export const Typography = ({ variant, children }: TypographyProps) => {
  return <TypographyStyles variant={variant}>{children}</TypographyStyles>;
};
