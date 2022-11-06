import { ArrowRightIcon } from '@radix-ui/react-icons';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';

import logo from '../../../../assets/logo.png';
import { Button } from '../../../../components/Button';
import { Form } from '../../../../components/Form';
import { Input } from '../../../../components/Input';
import { FormContainer, InputField, Label, LinkInput } from './styles';

export function FormLogin() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return (
    <FormContainer>
      <div className="top_form">
        <img src={logo} alt="" />
        <span>Fulgur Log-in</span>
      </div>
      <Form onSubmit={handleSubmit((data) => console.log(data))}>
        <InputField>
          <Label htmlFor="email">Email</Label>
          <Controller
            control={control}
            name="email"
            render={({ field }) => <Input placeholder="example@example.com" {...field} ref={null} />}
          />
        </InputField>
        <InputField>
          <Label htmlFor="password">Password</Label>
          <Controller
            control={control}
            name="password"
            render={({ field }) => <Input placeholder="0987654321" {...field} ref={null} />}
          />
          <LinkInput href="/forgot_password">forgot my password</LinkInput>
        </InputField>
        <Button type="submit" css={{ width: '100%' }}>
          Continue
          <ArrowRightIcon />
        </Button>
      </Form>
    </FormContainer>
  );
}
