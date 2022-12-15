import React from 'react';
import { Outlet, useParams } from 'react-router-dom';

export function Watch() {
  const { videoId } = useParams();
  console.log(videoId);

  return (
    <div>
      <h1>Watch Vídeo</h1>
      <h2>{videoId}</h2>
    </div>
  );
}
