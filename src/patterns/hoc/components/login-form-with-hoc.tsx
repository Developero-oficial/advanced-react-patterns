/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";

import { withForm } from "../with-form";
import {
  FormContainer,
  Form,
  Button,
  Input,
  Label,
  FormInputContainer,
} from "@/styles/form.styles";

interface MyFormProps {
  formValues: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export const MyForm = ({
  formValues,
  handleChange,
  handleSubmit,
}: MyFormProps) => {
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

export const LoginFormWithHoc = withForm(MyForm, { email: "", password: "" });
