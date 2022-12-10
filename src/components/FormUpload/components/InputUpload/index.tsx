import React, { forwardRef } from 'react';

import { StyledInputUpload } from './styles';

type PropsInputUpload = React.ComponentProps<typeof StyledInputUpload>;

export function InputUpload({ ...props }: PropsInputUpload) {
  return <StyledInputUpload {...props} />;
}

export const InputFile = forwardRef<HTMLInputElement, PropsInputUpload>((props, ref) => {
  return <input type="file" accept="image/*" required {...props} ref={ref} />;
});
