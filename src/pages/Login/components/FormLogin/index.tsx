import React from 'react';
import { useForm, Controller } from 'react-hook-form';

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
      <button type="submit">Enviar</button>
    </Form>
  );
}
