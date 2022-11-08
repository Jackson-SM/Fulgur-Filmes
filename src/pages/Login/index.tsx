import React from 'react';

import { CardForm } from '../../components/Form/components/CardForm';
import { LinkInput } from '../../components/Form/components/LinkInput';
import { FormLogin } from './components/FormLogin';
import { Container, LoginContainer } from './styles';

export function Login() {
  return (
    <LoginContainer>
      <Container>
        <CardForm title="Log-In" description="Entre para ver nosso catálogo de filmes e experienciar nosso serviço.">
          <div className="footer">
            <span>You don't have an account?</span>
            <LinkInput href="/register">Register</LinkInput>
          </div>
        </CardForm>
        <FormLogin />
      </Container>
    </LoginContainer>
  );
}
