import { ArrowRightIcon } from '@radix-ui/react-icons';
import React from 'react';
import { useForm, Controller } from 'react-hook-form';

import { Button } from '../../../../components/Button';
import { Form } from '../../../../components/Form';
import { LinkInput } from '../../../../components/Form/components/LinkInput';
import { Input } from '../../../../components/Input';
import { TextColor } from '../../../../components/TextColor';
import { useAuth } from '../../../../hooks/useAuth';
import { FormContainer } from './styles';

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
        <TextColor size="large_x">
          Entre com a sua <strong>conta</strong>.
        </TextColor>
        <TextColor as="a" href="/register" size="small_x">
          Ou <strong>crie</strong> uma
        </TextColor>
      </div>
      <Form
        onSubmit={handleSubmit(async (data) => {
          await login(data.email, data.password);
        })}
      >
        <Controller
          control={control}
          name="email"
          render={({ field }) => <Input placeholder="Seu Email" {...field} ref={null} border="rounded" />}
        />
        <Controller
          control={control}
          name="password"
          render={({ field }) => <Input placeholder="Sua Senha" {...field} ref={null} border="rounded" />}
        />
        <LinkInput href="/forgot_password">Forgot my password</LinkInput>

        <Button loading={isLoading} type="submit" css={{ width: '100%' }} color="primary">
          Continue
          <ArrowRightIcon />
        </Button>
      </Form>
    </FormContainer>
  );
}
