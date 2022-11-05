import React from 'react';

import { StyledInput } from './styles';

type InputProps = React.ComponentProps<typeof StyledInput>;

const Input = React.forwardRef((props, ref) => {
  return <StyledInput {...props} ref={ref} />;
});
