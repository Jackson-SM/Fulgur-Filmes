import { CalendarIcon, LapTimerIcon, PlusIcon, StarIcon, VideoIcon } from '@radix-ui/react-icons';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Api } from '../../../../api/api';
import { Box } from '../../../../components/Box';
import { Button } from '../../../../components/Button';
import { IVideoData } from '../../../../repositories/IVideoData';
import {
  ContainerInfoVideo,
  ContainerVideo,
  DescriptionVideo,
  ImplementInfo,
  ImplementsInformation,
  TitleVideo,
} from './styles';

export function Video() {
  const [video, setVideo] = useState<IVideoData>();

  const { videoId } = useParams();

  async function getVideo(): Promise<void> {
    const { data } = await Api.get<IVideoData>(`/video/${videoId}`);

    setVideo(data);
  }

  useEffect(() => {
    getVideo();
  }, []);

  console.log(video);

  return (
    <ContainerVideo
      css={{
        backgroundImage: `linear-gradient(to right, black 30%, transparent),url(http://localhost:3333/images/${video?.id}/${video?.assets.background_image})`,
      }}
    >
      <ContainerInfoVideo>
        <TitleVideo>{video?.title}</TitleVideo>
        <ImplementsInformation>
          <ImplementInfo>
            <StarIcon /> 7.6
          </ImplementInfo>
          <ImplementInfo>
            <LapTimerIcon />
            {video?.type === 'movie' ? video?.time : `${video?.seasons} Temporadas`}
          </ImplementInfo>
          <ImplementInfo>
            <CalendarIcon />
            {video?.year}
          </ImplementInfo>
        </ImplementsInformation>
        <DescriptionVideo>{video?.sinopse}</DescriptionVideo>
        <Box>
          <Button color="primary" size="default" css={{ padding: 15, fontSize: 15, gap: 20 }}>
            <VideoIcon />
            WATCH TRAILER
          </Button>
          <Button color="primary" size="default" css={{ padding: 15, fontSize: 15, gap: 20 }}>
            <PlusIcon />
            ADD LIST
          </Button>
        </Box>
      </ContainerInfoVideo>
    </ContainerVideo>
  );
}
