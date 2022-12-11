import { AxiosResponse } from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

import { Api } from '../../../../api/api';
import { BoxGrid } from '../../../../components/BoxGrid';
import { ScreenLoading } from '../../../../components/ScreenLoading';
import { IVideoData } from '../../../../repositories/IVideoData';
import { CardMovie } from '../CardMovie';

export function FeaturedVideos() {
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery('featuredVideos', async () => {
    const { data } = await Api.get<IVideoData[]>('video');

    return data;
  });

  if (isLoading) {
    return <ScreenLoading />;
  }

  return (
    <BoxGrid>
      {videos?.map((video) => {
        return <CardMovie key={video.id} data={video} />;
      })}
    </BoxGrid>
  );
}
