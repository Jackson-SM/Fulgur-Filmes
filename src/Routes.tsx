import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { ScreenLoading } from './components/ScreenLoading';
import { useAuth } from './hooks/useAuth';
import { Dashboard } from './pages/Dashboard';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Upload } from './pages/Upload';
import { GlobalCss } from './styled/GlobalCss';

type RouteProps = {
  children: JSX.Element;
  levelAccess?: number;
};

export function PublicRoute({ children }: RouteProps) {
  const { isLogged } = useAuth();

  return isLogged ? <Navigate to="/" /> : children;
}

export function PrivateRoute({ levelAccess, children }: RouteProps) {
  const { isLogged, isLoading, user } = useAuth();

  if (isLoading) {
    return <ScreenLoading />;
  }

  if (isLogged) {
    const levelAccessIsEqual = Number(user?.level) >= Number(levelAccess || 1);
    return levelAccessIsEqual ? children : <Navigate to="/" />;
  }

  return <Navigate to="/login" />;
}

function App() {
  useEffect(() => {
    GlobalCss();
  }, []);

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

      <Route
        path="/dashboard"
        element={
          <PrivateRoute levelAccess={2}>
            <Dashboard />
          </PrivateRoute>
        }
      >
        <Route path="upload" element={<Upload />} />
      </Route>
    </Routes>
  );
}

export default App;
