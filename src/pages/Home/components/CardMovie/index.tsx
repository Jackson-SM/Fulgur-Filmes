import React from 'react';

import { IVideoData } from '../../../../repositories/IVideoData';
import { StyledCardMovie, StyledImgCard } from './styles';

interface ICardMovieProps extends React.ComponentProps<typeof StyledCardMovie> {
  data?: IVideoData;
}

export function CardMovie({ data, ...props }: ICardMovieProps) {
  const coverImage = `http://localhost:3333/images/${data?.id}/${data?.assets.cover_image}`;

  return (
    <StyledCardMovie {...props} href={`/watch/${data?.id}`}>
      <StyledImgCard src={coverImage} />
    </StyledCardMovie>
  );
}

interface ICardVideoPreview extends React.ComponentProps<typeof StyledCardMovie> {
  resultFile?: string;
}

export function CardVideoPreview({ resultFile, ...props }: ICardVideoPreview) {
  return (
    <StyledCardMovie {...props}>
      <StyledImgCard src={resultFile} />
    </StyledCardMovie>
  );
}
