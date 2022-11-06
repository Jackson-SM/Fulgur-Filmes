import React from 'react';

import { Form } from '../../components/Form';
import { CardForm } from './components/CardForm';
import { FormLogin } from './components/FormLogin';
import { Container, LoginContainer } from './styles';

export function Login() {
  return (
    <LoginContainer>
      <Container>
        <CardForm title="Log-In" description="Entre para ver nosso catálogo de filmes e experienciar nosso serviço." />
        <FormLogin />
      </Container>
    </LoginContainer>
  );
}
