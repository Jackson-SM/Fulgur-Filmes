import React from 'react';

import { Steps } from './components/Steps';

type PropsFormUpload = {
  title: string;
  sinopse: string;
  year: number;
  type: string;
  seasons: number | undefined;
  time: string | undefined;
  episodes: number | undefined;
  classificationIndicative: number;
};

export function FormUpload() {
  return <Steps />;
}
