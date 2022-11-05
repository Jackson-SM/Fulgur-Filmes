import React from 'react';

import { Form } from '../../components/Form';
import { CardForm } from './components/CardForm';
import { FormLogin } from './components/FormLogin';
import { FormContainer, LoginContainer } from './styles';

export function Login() {
  return (
    <LoginContainer>
      <FormContainer>
        <CardForm />
        <FormLogin />
      </FormContainer>
    </LoginContainer>
  );
}
