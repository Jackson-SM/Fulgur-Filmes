import React from 'react';

import { Button } from '../../../../components/Button';
import { InputSearch } from '../../../../components/InputSearch';
import { StyledOptionsFiltered, StyledOptionsGroup } from './styles';

export function OptionsFiltered() {
  return (
    <StyledOptionsFiltered>
      <InputSearch type="search" placeholder="Corações de Ferro..." />
      <StyledOptionsGroup>
        <Button outlined="secondary">Popular</Button>
        <Button outlined="secondary">Newester</Button>
        <Button outlined="secondary">Series</Button>
      </StyledOptionsGroup>
    </StyledOptionsFiltered>
  );
}
