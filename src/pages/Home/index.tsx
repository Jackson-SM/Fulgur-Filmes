import React, { useEffect } from 'react';

import { Api } from '../../api/api';
import { Navbar } from '../../components/Navbar';
import { Banner } from './components/Banner';
import { LinksNavbarHome } from './components/LinksNavbarHome';
import { Main } from './components/Main';
import { Options } from './components/Options';
import { Top10Watched } from './components/Top10Watched';
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
      <Main>
        <Banner />
        <Top10Watched />
      </Main>
    </HomeContainer>
  );
}
