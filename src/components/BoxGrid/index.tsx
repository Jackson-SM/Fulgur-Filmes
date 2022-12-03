import React from 'react';

import { StyledBoxGrid } from './styles';

type PropsBoxGrid = {
  children: React.ReactNode;
};

export function BoxGrid({ children }: PropsBoxGrid) {
  return <StyledBoxGrid>{children}</StyledBoxGrid>;
}
