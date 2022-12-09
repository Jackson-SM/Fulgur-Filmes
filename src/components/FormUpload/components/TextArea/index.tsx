import React from 'react';

import { StyledTextArea } from './styles';

type PropsTextArea = React.ComponentProps<typeof StyledTextArea>;

export function TextArea(props: PropsTextArea) {
  return <StyledTextArea {...props} />;
}
