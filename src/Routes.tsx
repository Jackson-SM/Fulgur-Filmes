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
};

export function PublicRoute({ children }: RouteProps) {
  const { isLogged } = useAuth();

  return isLogged ? <Navigate to="/" /> : children;
}

export function PrivateRoute({ children }: RouteProps) {
  const { isLogged, isLoading } = useAuth();

  if (isLoading) {
    return <ScreenLoading />;
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

      <Route path="/dashboard" element={<Dashboard />}>
        <Route
          path="upload"
          element={
            <PrivateRoute>
              <Upload />
            </PrivateRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;
