import React from 'react';

import imgCard from '../../../../assets/movies/card/doctor_strange_multiverse.jpeg';
import { StyledCardMovie, StyledImgCard } from './styles';

export function CardMovie() {
  return (
    <StyledCardMovie>
      <StyledImgCard src={imgCard} />
    </StyledCardMovie>
  );
}
