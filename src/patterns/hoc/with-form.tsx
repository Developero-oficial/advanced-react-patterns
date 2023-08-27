/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";

export const withForm = (
  Component: React.ComponentType<any>,
  initialState: any,
) => {
  const EnhancedComponent = (props: any) => {
    const [formValues, setFormValues] = useState(initialState);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const {
        target: { name, value },
      } = e;
      setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      alert(JSON.stringify(formValues));
    };

    return (
      <Component
        {...props}
        formValues={formValues}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    );
  };

  return EnhancedComponent;
};
