import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider } from './context/Auth';
import { ThemeProvider } from './context/Theme';
import AppRoutes from './Routes';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <BrowserRouter>
    <AuthProvider>
      <ThemeProvider>
        <AppRoutes />
      </ThemeProvider>
    </AuthProvider>
  </BrowserRouter>,
);
