import React from 'react';

import { StyledTextColor } from './styles';

interface ITextColorProps extends React.ComponentProps<typeof StyledTextColor> {
  as?: React.ElementType;
  href?: string;
}

export function TextColor(props: ITextColorProps) {
  return <StyledTextColor {...props} />;
}
