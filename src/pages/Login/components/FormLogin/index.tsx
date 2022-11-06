import React from 'react';
import { useForm, Controller } from 'react-hook-form';

import { Button } from '../../../../components/Button';
import { Form } from '../../../../components/Form';
import { Input } from '../../../../components/Input';

export function FormLogin() {
  const { control, handleSubmit } = useForm({
    defaultValues: {
      email: '',
      password: '',
    },
  });

  return (
    <Form onSubmit={handleSubmit((data) => console.log(data))}>
      <Controller control={control} name="email" render={({ field }) => <Input {...field} ref={null} />} />
      <Controller control={control} name="password" render={({ field }) => <Input {...field} ref={null} />} />
      <Button type="submit">Enviar</Button>
    </Form>
  );
}
