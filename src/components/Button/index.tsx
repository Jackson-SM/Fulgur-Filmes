import React from 'react';

import { StyledButton } from './styles';

type ButtonProps = React.ComponentProps<typeof StyledButton> & {
  as?: string;
};

export function Button({ children, as, ...props }: ButtonProps) {
  return <StyledButton {...props}>{children}</StyledButton>;
}
