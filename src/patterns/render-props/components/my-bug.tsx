import React from "react";

import { Button } from "@/styles/form.styles";

export const MyBug = () => {
  const [isError, setIsError] = React.useState(false);

  const handleCrash = () => {
    setIsError(true);
  };

  if (isError) {
    throw new Error("nani?");
  }

  return <Button onClick={handleCrash}>Crashear la app</Button>;
};
