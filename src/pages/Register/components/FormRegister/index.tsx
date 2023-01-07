import { Box, CircularProgress } from '@mui/material';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';

import logo from '../../../../assets/logo.png';
import { Button } from '../../../../components/Button';
import { Form } from '../../../../components/Form';
import { Input } from '../../../../components/Input';
import { useAuth } from '../../../../hooks/useAuth';
import { FormContainer } from '../../../Login/components/FormLogin/styles';

export function FormRegister() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      name: '',
      password: '',
    },
  });

  const { register, isLoading } = useAuth();
  return (
    <FormContainer>
      <div className="top_form">
        <img src={logo} alt="" />
      </div>
      <Form
        onSubmit={handleSubmit(async (data) => {
          await register(data.email, data.name, data.password);
        })}
      >
        <Controller control={control} name="email" render={({ field }) => <Input {...field} ref={null} />} />

        <Controller control={control} name="name" render={({ field }) => <Input {...field} ref={null} />} />

        <Controller control={control} name="password" render={({ field }) => <Input {...field} ref={null} />} />
        <Button loading={isLoading} type="submit" css={{ width: '100%' }} color="primary">
          Continue
          <ArrowRightIcon />
        </Button>
      </Form>
    </FormContainer>
  );
}
