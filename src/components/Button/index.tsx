import { Box, CircularProgress } from '@mui/material';
import React from 'react';

import { CircularProgressButton, StyledButton } from './styles';

type ButtonProps = React.ComponentProps<typeof StyledButton> & {
  loading?: boolean;
};

// eslint-disable-next-line react/prop-types
export function Button({ loading, children, ...props }: ButtonProps) {
  return (
    <StyledButton disabled={loading} {...props}>
      {loading ? <CircularProgressButton size="16px" sx={{ height: '20px', width: '20px' }} /> : children}
    </StyledButton>
  );
}
