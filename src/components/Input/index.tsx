import React from 'react';

import { StyledInput } from './styles';

type InputProps = React.ComponentProps<typeof StyledInput>;

export function Input(props: InputProps) {
  return <StyledInput {...props} />;
}
