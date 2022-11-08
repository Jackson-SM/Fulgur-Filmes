import React from 'react';

import { Form } from '../../components/Form';
import { CardForm } from '../../components/Form/components/CardForm';
import { LinkInput } from '../../components/Form/components/LinkInput';
import { Container } from '../Login/styles';
import { FormRegister } from './components/FormRegister';
import { RegisterContainer } from './styles';

export function Register() {
  return (
    <RegisterContainer>
      <Container>
        <CardForm
          title="Register"
          description="Registre-se para começar a utlizar nossos serviços e passar o tempo assistindo à um filme."
        >
          <div className="footer">
            <span>you have an account?</span>
            <LinkInput href="/login">Log-in</LinkInput>
          </div>
        </CardForm>
        <FormRegister />
      </Container>
    </RegisterContainer>
  );
}
