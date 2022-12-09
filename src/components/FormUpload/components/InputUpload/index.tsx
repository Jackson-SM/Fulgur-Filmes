import React from 'react';

import { StyledInputUpload } from './styles';

type PropsInputUpload = React.ComponentProps<typeof StyledInputUpload>;

export function InputUpload({ ...props }: PropsInputUpload) {
  return <StyledInputUpload {...props} />;
}
