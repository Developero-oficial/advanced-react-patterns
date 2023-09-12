import React from "react";

import "./button.styles.css";

interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const CustomButton = ({
  children,
  className = "button button--primary",
  style = {},
}: CustomButtonProps) => {
  return (
    <button style={style} className={className}>
      {children}
    </button>
  );
};
