import { ArrowRightIcon } from '@radix-ui/react-icons';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';

import logo from '../../../../assets/logo.png';
import { Button } from '../../../../components/Button';
import { Form } from '../../../../components/Form';
import { LinkInput } from '../../../../components/Form/components/LinkInput';
import { Input } from '../../../../components/Input';
import { useAuth } from '../../../../hooks/useAuth';
import { FormContainer, InputField, Label } from './styles';

export function FormLogin() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const { login, isLoading } = useAuth();

  return (
    <FormContainer>
      <div className="top_form">
        <img src={logo} alt="" />
      </div>
      <Form onSubmit={handleSubmit((data) => login(data.email, data.password))}>
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
          <LinkInput href="/forgot_password">Forgot my password</LinkInput>
        </InputField>
        <Button loading={isLoading} type="submit" css={{ width: '100%' }}>
          Continue
          <ArrowRightIcon />
        </Button>
      </Form>
    </FormContainer>
  );
}
