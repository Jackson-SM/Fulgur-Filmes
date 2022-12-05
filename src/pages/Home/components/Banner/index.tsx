import { ResumeIcon } from '@radix-ui/react-icons';
import React from 'react';

import background from '../../../../assets/movies/wall-e.jpg';
import { Button } from '../../../../components/Button';
import { BannerInfo, BannerSinopse, BannerTitle, ContainerInfo, StyledBanner, StyledBannerImg } from './styles';

export function Banner() {
  return (
    <StyledBanner>
      <ContainerInfo>
        <BannerInfo>
          <BannerTitle>Wall-E</BannerTitle>
          <BannerSinopse>
            é um filme de animação americano de 2008 produzido pela Pixar Animation Studios e dirigido por Andrew
            Stanton.
          </BannerSinopse>
          <Button color="secundary" size="large">
            Watch Trailer
          </Button>
        </BannerInfo>
      </ContainerInfo>
      <StyledBannerImg src={background} />
    </StyledBanner>
  );
}
