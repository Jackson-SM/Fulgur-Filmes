import React from 'react';

import { ContainerItems, StyledBoxGrid } from './styles';

type PropsBoxGrid = {
  children: React.ReactNode;
  title?: string;
};

export function BoxGrid({ title, children }: PropsBoxGrid) {
  return (
    <StyledBoxGrid>
      {title && <span>{title}</span>}
      <ContainerItems>{children}</ContainerItems>
    </StyledBoxGrid>
  );
}
