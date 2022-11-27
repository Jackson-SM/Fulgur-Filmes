import React from 'react';

import { ContainerLinks, LinkNavbar } from './styles';

export function LinksNavbarHome() {
  return (
    <ContainerLinks>
      <LinkNavbar to="#movies">Movies</LinkNavbar>
      <LinkNavbar to="#series">Series</LinkNavbar>
      <LinkNavbar to="#catalog">Catalog</LinkNavbar>
    </ContainerLinks>
  );
}
