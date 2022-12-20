import React from 'react';

import { ContainerBox } from './styles';

type BoxProps = React.ComponentProps<typeof ContainerBox>;

export function Box({ children }: BoxProps) {
  return <ContainerBox>{children}</ContainerBox>;
}
