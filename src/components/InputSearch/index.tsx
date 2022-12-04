import { MagnifyingGlassIcon } from '@radix-ui/react-icons';
import React from 'react';

import { Button } from '../Button';
import { InputFieldSearch, StyledInputSearch } from './styles';

type PropsInputSearch = React.ComponentProps<typeof StyledInputSearch>;

export function InputSearch({ ...props }: PropsInputSearch) {
  return (
    <InputFieldSearch>
      <StyledInputSearch {...props} />
      <Button color="secundary">
        <MagnifyingGlassIcon />
      </Button>
    </InputFieldSearch>
  );
}
