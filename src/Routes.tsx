import { CircularProgress } from '@mui/material';
import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Api } from './api/api';
import { useAuth } from './hooks/useAuth';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { GlobalCss } from './styled/GlobalCss';

type RouteProps = {
  children: JSX.Element;
};

export function PublicRoute({ children }: RouteProps) {
  const { isLogged, isLoading } = useAuth();

  return isLogged ? <Navigate to="/" /> : children;
}
export function PrivateRoute({ children }: RouteProps) {
  const { isLogged, isLoading, userVerifyAndReturned } = useAuth();

  useEffect(() => {
    userVerifyAndReturned();
  }, []);

  if (isLoading) {
    return <CircularProgress />;
  }

  return isLogged ? children : <Navigate to="/login" />;
}

function App() {
  GlobalCss();

  return (
    <Routes>
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route
        path="/login"
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path="/register"
        element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        }
      />
    </Routes>
  );
}

export default App;
