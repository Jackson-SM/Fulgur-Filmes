import { CircularProgress } from '@mui/material';
import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Api } from './api/api';
import { ScreenLoading } from './components/ScreenLoading';
import { useAuth } from './hooks/useAuth';
import { Home } from './pages/Home';
import { Index } from './pages/Index';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Upload } from './pages/Upload';
import { UploadVideo } from './pages/UploadVideo';
import { GlobalCss } from './styled/GlobalCss';

type RouteProps = {
  children: JSX.Element;
};

export function PublicRoute({ children }: RouteProps) {
  const { isLogged } = useAuth();

  return isLogged ? <Navigate to="/" /> : children;
}

export function PrivateRoute({ children }: RouteProps) {
  const { isLogged, isLoading, user } = useAuth();

  if (isLoading) {
    return <ScreenLoading />;
  }

  return isLogged ? children : <Navigate to="/login" />;
}

export function HomeRenderingCondition() {
  const { isLogged, isLoading } = useAuth();

  if (isLoading) {
    return <ScreenLoading />;
  }

  if (isLogged) {
    return <Home />;
  }

  return <Index />;
}

function App() {
  GlobalCss();

  return (
    <Routes>
      <Route path="/" element={<HomeRenderingCondition />} />
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

      <Route path="/managment">
        <Route
          path="upload"
          element={
            <PrivateRoute>
              <Upload />
            </PrivateRoute>
          }
        >
          <Route path="video" element={<UploadVideo />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
