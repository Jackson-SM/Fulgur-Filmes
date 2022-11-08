import React from 'react';

import illustration from '../../../../assets/illustration.svg';
import wave from '../../../../assets/wave.svg';
import { LinkInput } from '../LinkInput';
import { StyledCardForm } from './styles';

type CardFormProps = React.ComponentProps<typeof StyledCardForm> & {
  title?: string;
  description?: string;
  illustrationImg?: string;
  backgroundImg?: string;
};

export function CardForm({ title, description, illustrationImg, backgroundImg, children, ...props }: CardFormProps) {
  return (
    <StyledCardForm {...props} css={{ backgroundImage: `url(${backgroundImg || wave})` }}>
      <div className="header">
        <h1>{title}</h1>
        <span>{description}</span>
      </div>
      <div className="illustration">
        <img src={illustrationImg || illustration} alt="" />
      </div>
      {children}
    </StyledCardForm>
  );
}
