import React from 'react';

import logo from '../../assets/logo.png';
import { ImgLogo, LogoContainer, TextLogo } from './styles';

export function Logo() {
  return (
    <LogoContainer>
      <ImgLogo src={logo} sizes="md" />
      <TextLogo>Fulgur</TextLogo>
    </LogoContainer>
  );
}
