import React from "react";

import { Typography } from "@/components/typography";
import { Container } from "@/components/container";
import { Toggle } from "./components/toggle";
import { ToggleRefactored } from "./components/toggle-refactored";
import { Link } from "@/styles/link.styles";

export const ControlPropsPage = () => {
  const [isOn, setIsOn] = React.useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === "true") {
      setIsOn(true);
      return;
    }
  };

  return (
    <Container>
      <Typography variant="title">Control Props</Typography>
      <Typography>
        Accede a la lección de Control Props dando{" "}
        <Link
          href="https://www.youtube.com/watch?v=WHlO3gduNk8&list=PLkr7dGY4D2sOyjBKXyNhtkIwO3suaqotD&index=9&t=222s&ab_channel=Developero"
          target="_blank"
        >
          click aquí.
        </Link>
      </Typography>
      <Typography variant="header">Ejemplo sin Control Props</Typography>
      <Toggle />
      <Typography variant="header">Ejemplo con el patrón</Typography>
      <ToggleRefactored value={isOn} handleChange={handleToggle} />
      <Container maxWidth="100px">
        <input type="text" onChange={handleInputChange} />
      </Container>
    </Container>
  );
};
