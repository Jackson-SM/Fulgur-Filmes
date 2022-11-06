import React from 'react';

import illustration from '../../../../assets/illustration.svg';
import { LinkInput } from '../FormLogin/styles';
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
        <span>don't have an account?</span>
        <LinkInput href="/register">Register</LinkInput>
      </div>
    </StyledCardForm>
  );
}
