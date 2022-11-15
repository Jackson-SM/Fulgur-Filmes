import React from 'react';

import { ContainerLinks, LinkNavbar } from './styles';

export function LinksNavbarHome() {
  return (
    <ContainerLinks>
      <LinkNavbar to="#filmes">Home</LinkNavbar>
      <LinkNavbar to="#filmes">Catalog</LinkNavbar>
      <LinkNavbar to="#filmes">Pricing Plans</LinkNavbar>
    </ContainerLinks>
  );
}
