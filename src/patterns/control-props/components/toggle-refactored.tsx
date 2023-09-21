import React from "react";

import {
  ToggleWrapper,
  ToggleLabel,
  ToggleInput,
  ToggleSlider,
} from "@/styles/toggle.styles";

interface ToggleRefactoredProps {
  value?: boolean;
  handleChange?: () => void;
}

export const ToggleRefactored = ({
  value,
  handleChange,
}: ToggleRefactoredProps) => {
  const [isOn, setIsOn] = React.useState(false);

  const isControlled = value !== undefined && handleChange !== undefined;

  const handleToggle = () => {
    if (isControlled) {
      handleChange();
      return;
    }

    setIsOn(!isOn);
  };

  const finalValue = isControlled ? value : isOn;

  return (
    <ToggleWrapper>
      <ToggleLabel>
        <ToggleInput
          type="checkbox"
          checked={finalValue}
          onChange={handleToggle}
        />
        <ToggleSlider />
      </ToggleLabel>
    </ToggleWrapper>
  );
};
