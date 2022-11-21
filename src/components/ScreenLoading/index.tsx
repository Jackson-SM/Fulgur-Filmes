import { CircularProgress } from '@mui/material';
import React from 'react';

import { Logo } from '../Logo';
import { ContainerLoading } from './styles';

export function ScreenLoading() {
  return (
    <ContainerLoading>
      <Logo />
      <CircularProgress />
    </ContainerLoading>
  );
}
