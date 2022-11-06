import { Routes, Route, Navigate } from 'react-router-dom';

import { useAuth } from './hooks/useAuth';
import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { GlobalCss } from './styled/GlobalCss';

type RouteProps = {
  children: JSX.Element;
};

export function PublicRoute({ children }: RouteProps) {
  const { isLogged, isLoading } = useAuth();

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return isLogged ? <Navigate to="/" /> : children;
}
export function PrivateRoute({ children }: RouteProps) {
  const { isLogged, isLoading } = useAuth();

  if (isLoading) {
    return <h1>Loading...</h1>;
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
    </Routes>
  );
}

export default App;
