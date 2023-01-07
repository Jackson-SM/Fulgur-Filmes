import React from 'react';

import { Navbar } from '../../components/Navbar';
import { Banner } from './components/Banner';
import { FeaturedVideos } from './components/FeaturedVideos';
import { LinksNavbarHome } from './components/LinksNavbarHome';
import { Main } from './components/Main';
import { OptionsFiltered } from './components/OptionsFiltered';
import { OptionsUser } from './components/OptionsUser';
import { ContainerCards, HomeContainer } from './styles';

export function Home() {
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
