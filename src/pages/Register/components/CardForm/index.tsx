import React from 'react';

import illustration from '../../../../assets/illustration.svg';
import { LinkInput } from '../../../Login/components/FormLogin/styles';
import { StyledCardForm } from './styles';

type CardFormProps = {
  title?: string;
  description?: string;
};

export function CardForm({ title, description }: CardFormProps) {
  return (
    <StyledCardForm>
      <div className="header">
        <h1>{title}</h1>
        <span>{description}</span>
      </div>
      <div className="illustration">
        <img src={illustration} alt="" />
      </div>
      <div className="footer">
        <span>You have a account ?</span>
        <LinkInput href="/login">Log-in</LinkInput>
      </div>
    </StyledCardForm>
  );
}
