import React from "react";

import "./button.styles.css";

interface NormalButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const NormalButton = ({ children }: NormalButtonProps) => {
  return <button className="button button--primary">{children}</button>;
};
