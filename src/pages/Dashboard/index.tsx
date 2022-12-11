import React from 'react';
import { Outlet } from 'react-router-dom';

import { TextColor } from '../../components/TextColor';

export function Dashboard() {
  return (
    <div>
      <div>
        <TextColor size="medium_x">
          Dash<strong>board</strong>
        </TextColor>
      </div>
      <Outlet />
    </div>
  );
}
