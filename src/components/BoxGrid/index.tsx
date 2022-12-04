import React from 'react';

import { ContainerItems, StyledBoxGrid } from './styles';

type PropsBoxGrid = {
  children: React.ReactNode;
};

export function BoxGrid({ children }: PropsBoxGrid) {
  return (
    <StyledBoxGrid>
      <span>More Watcheds</span>
      <ContainerItems>{children}</ContainerItems>
    </StyledBoxGrid>
  );
}
