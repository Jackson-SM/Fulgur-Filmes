import { Box, CircularProgress } from '@mui/material';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';

import logo from '../../../../assets/logo.png';
import { Button } from '../../../../components/Button';
import { Form } from '../../../../components/Form';
import { Input } from '../../../../components/Input';
import { useAuth } from '../../../../hooks/useAuth';
import { FormContainer, InputField, Label } from '../../../Login/components/FormLogin/styles';

export function FormRegister() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      name: '',
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
          <Controller control={control} name="email" render={({ field }) => <Input {...field} ref={null} />} />
        </InputField>
        <InputField>
          <Label htmlFor="password">Name</Label>
          <Controller control={control} name="name" render={({ field }) => <Input {...field} ref={null} />} />
        </InputField>
        <InputField>
          <Label htmlFor="password">Password</Label>
          <Controller control={control} name="password" render={({ field }) => <Input {...field} ref={null} />} />
        </InputField>
        <InputField>
          <Label htmlFor="password">Confirm Password</Label>
          <Input type="password" />
        </InputField>
        <Button disabled={isLoading} type="submit" css={{ width: '100%' }}>
          {isLoading ? (
            'Loading...'
          ) : (
            <>
              Continue
              <ArrowRightIcon />
            </>
          )}
        </Button>
      </Form>
    </FormContainer>
  );
}
