import React from 'react';

import illustration from '../../../../assets/illustration.svg';
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
      <img src={illustration} alt="" />
    </StyledCardForm>
  );
}
