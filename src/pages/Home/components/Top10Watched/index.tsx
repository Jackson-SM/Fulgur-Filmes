import React from 'react';

import { BoxGrid } from '../../../../components/BoxGrid';
import { CardMovie } from '../CardMovie';

export function Top10Watched() {
  return (
    <BoxGrid>
      <CardMovie />
      <CardMovie />
      <CardMovie />
      <CardMovie />
      <CardMovie />
      <CardMovie />
    </BoxGrid>
  );
}
