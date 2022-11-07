import React from 'react';

import { Logo } from '../Logo';
import { StyledNavbar } from './styles';

type NavbarProps = React.ComponentProps<typeof StyledNavbar>;

export function Navbar({ children, ...props }: NavbarProps) {
  return (
    <StyledNavbar {...props}>
      <Logo />
      {children}
    </StyledNavbar>
  );
}
