import styled from "styled-components";

export const ToggleWrapper = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export const ToggleInput = styled.input`
  display: none;
`;

export const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

export const ToggleLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

  ${ToggleInput}:checked + ${ToggleSlider} {
    background-color: #2196f3;
  }

  ${ToggleInput}:checked + ${ToggleSlider}:before {
    transform: translateX(26px);
  }
`;
