/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";

import {
  FormContainer,
  Form,
  Button,
  Input,
  Label,
  FormInputContainer,
} from "@/styles/form.styles";

interface FormInputs {
  email: string;
  password: string;
}

export const LoginForm = () => {
  const [formValues, setFormValues] = useState<FormInputs>({
    email: "",
    password: "",
  });

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
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <FormInputContainer>
          <Label htmlFor="email">Email:</Label>
          <Input
            type="email"
            name="email"
            id="email"
            value={formValues.email}
            onChange={handleChange}
          />
        </FormInputContainer>
        <FormInputContainer>
          <Label htmlFor="password">Password:</Label>
          <Input
            type="password"
            name="password"
            id="password"
            value={formValues.password}
            onChange={handleChange}
          />
        </FormInputContainer>
        <Button type="submit">Login</Button>
      </Form>
    </FormContainer>
  );
};
