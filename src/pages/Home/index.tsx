import React, { useEffect } from 'react';

import { Api } from '../../api/api';
import { Navbar } from '../../components/Navbar';
import { Banner } from './components/Banner';
import { LinksNavbarHome } from './components/LinksNavbarHome';
import { Main } from './components/Main';
import { OptionsFiltered } from './components/OptionsFiltered';
import { OptionsUser } from './components/OptionsUser';
import { FeaturedVideos } from './components/FeaturedVideos';
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
          <FeaturedVideos />
        </ContainerCards>
      </Main>
    </HomeContainer>
  );
}
