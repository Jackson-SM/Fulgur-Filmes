import React from 'react';

import background from '../../../../assets/movies/wall-e.jpg';
import { StyledBanner, StyledBannerImg } from './styles';

export function Banner() {
  return (
    <StyledBanner>
      <StyledBannerImg src={background} />
    </StyledBanner>
  );
}
