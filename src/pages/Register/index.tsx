import React from 'react';

import { Form } from '../../components/Form';
import { Container } from '../Login/styles';
import { CardForm } from './components/CardForm';
import { FormRegister } from './components/FormRegister';
import { RegisterContainer } from './styles';

export function Register() {
  return (
    <RegisterContainer>
      <Container>
        <CardForm
          title="Register"
          description="Registre-se para começar a utlizar nossos serviços e passar o tempo assistindo à um filme."
        />
        <FormRegister />
      </Container>
    </RegisterContainer>
  );
}
