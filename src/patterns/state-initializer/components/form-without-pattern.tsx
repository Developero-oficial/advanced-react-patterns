import React from "react";

import {
  FormContainer,
  Form,
  Button,
  Input,
  Label,
  FormInputContainer,
} from "@/styles/form.styles";

interface FormWithoutPatternProps {
  defaultName?: string;
}

const useForm = ({ defaultName }: FormWithoutPatternProps) => {
  const [formData, setFormData] = React.useState({
    name: defaultName,
    email: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(JSON.stringify(formData));
  };

  return { formData, handleInputChange, handleSubmit };
};

export const FormWithoutPattern = ({
  defaultName = "",
}: FormWithoutPatternProps) => {
  const { formData, handleInputChange, handleSubmit } = useForm({
    defaultName,
  });

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <FormInputContainer>
          <Label htmlFor="name">Name:</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
          />
        </FormInputContainer>

        <FormInputContainer>
          <Label htmlFor="email">Email:</Label>
          <Input
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
          />
        </FormInputContainer>

        <Button type="submit">Submit</Button>
      </Form>
    </FormContainer>
  );
};
