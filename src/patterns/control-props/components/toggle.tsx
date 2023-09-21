import React from "react";

import {
  ToggleWrapper,
  ToggleLabel,
  ToggleInput,
  ToggleSlider,
} from "@/styles/toggle.styles";

export const Toggle = () => {
  const [isOn, setIsOn] = React.useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <ToggleWrapper>
      <ToggleLabel>
        <ToggleInput type="checkbox" checked={isOn} onChange={handleToggle} />
        <ToggleSlider />
      </ToggleLabel>
    </ToggleWrapper>
  );
};
