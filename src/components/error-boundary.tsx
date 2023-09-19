import React from "react";

import { Typography } from "./typography";
import { Button } from "@/styles/form.styles";
import { Container } from "./container";

interface RenderOnErrorParams {
  hasError: boolean;
  error?: Error;
  resetError: () => void;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  renderOnError?: ({
    hasError,
    error,
    resetError,
  }: RenderOnErrorParams) => React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  state = { hasError: false, error: undefined };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  resetError = () => {
    this.setState({ hasError: false });
  };

  componentDidCatch(error: Error) {
    console.error("There as an error", error);
    this.setState({ error });
  }

  render() {
    if (this.state.hasError && !this.props.renderOnError) {
      return (
        <Container maxWidth="250px">
          <Typography variant="header">Algo ha salido mal D:</Typography>
          <Button onClick={this.resetError}>Reiniciar</Button>
        </Container>
      );
    }

    if (this.state.hasError && this.props.renderOnError) {
      return this.props.renderOnError({
        error: this.state.error,
        hasError: this.state.hasError,
        resetError: this.resetError,
      });
    }

    return this.props.children;
  }
}
