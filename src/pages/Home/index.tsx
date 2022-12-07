import React, { useEffect } from 'react';

import { Api } from '../../api/api';
import { Navbar } from '../../components/Navbar';
import { Banner } from './components/Banner';
import { LinksNavbarHome } from './components/LinksNavbarHome';
import { Main } from './components/Main';
import { OptionsFiltered } from './components/OptionsFiltered';
import { OptionsUser } from './components/OptionsUser';
import { Top10Watched } from './components/Top10Watched';
import { ContainerCards, HomeContainer } from './styles';

export function Home() {
  useEffect(() => {
    console.log(Api.defaults.headers.Authorization);
  }, []);

  return (
    <HomeContainer>
      <Navbar spacing="around">
        <LinksNavbarHome />
        <OptionsUser />
      </Navbar>
      <Main>
        <Banner />
        <ContainerCards>
          <OptionsFiltered />
          <Top10Watched />
        </ContainerCards>
      </Main>
    </HomeContainer>
  );
}
