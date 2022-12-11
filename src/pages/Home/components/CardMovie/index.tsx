import React from 'react';

import { IVideoData } from '../../../../repositories/IVideoData';
import { StyledCardMovie, StyledImgCard } from './styles';

interface ICardMovieProps extends React.ComponentProps<typeof StyledCardMovie> {
  data?: IVideoData;
}

export function CardMovie({ data, ...props }: ICardMovieProps) {
  const coverImage = `http://localhost:3333/images/${data?.id}/cover.jpeg`;

  return (
    <StyledCardMovie {...props}>
      <StyledImgCard src={coverImage} />
      <h1>{data?.title}</h1>
    </StyledCardMovie>
  );
}
