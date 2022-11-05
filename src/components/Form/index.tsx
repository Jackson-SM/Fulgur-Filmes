import React from 'react';

import { StyledForm } from './styles';

type FormProps = React.ComponentProps<typeof StyledForm> & {
  children: React.ReactNode;
};

export function Form({ children, ...props }: FormProps) {
  return <StyledForm {...props}>{children}</StyledForm>;
}
