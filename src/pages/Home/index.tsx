import React, { useEffect } from 'react';

import { Api } from '../../api/api';
import { Navbar } from '../../components/Navbar';
import { LinksNavbarHome } from './components/LinksNavbarHome';
import { Options } from './components/Options';
import { HomeContainer } from './styles';

export function Home() {
  useEffect(() => {
    console.log(Api.defaults.headers.Authorization);
  }, []);

  return (
    <HomeContainer>
      <Navbar spacing="around">
        <LinksNavbarHome />
        <Options />
      </Navbar>
    </HomeContainer>
  );
}
