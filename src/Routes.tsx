import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { ScreenLoading } from './components/ScreenLoading';
import { useAuth } from './hooks/useAuth';
import { Dashboard } from './pages/Dashboard';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Register } from './pages/Register';
import { Upload } from './pages/Upload';
import { Watch } from './pages/Watch';
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

  console.log(user);

  if (isLoading) {
    return <ScreenLoading />;
  }

  if (isLogged) {
    // const levelAccessIsEqual = Number(user?.level) >= Number(levelAccess || 1);
    return children;
  }

  return <Navigate to="/register" />;
}

function App() {
  useEffect(() => {
    GlobalCss();
  }, []);

  return (
    <Routes>
      <Route path="/">
        <Route
          index
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route
          path="login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          <Route path="upload" element={<Upload />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
