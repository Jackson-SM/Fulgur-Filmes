import { Routes, Route, Navigate } from 'react-router-dom';

import { useAuth } from './hooks/useAuth';
import { Login } from './pages/Login';
import { GlobalCss } from './styled/GlobalCss';

type RouteProps = {
  children: JSX.Element;
};

export function PrivateRoute({ children }: RouteProps) {
  const { isLogged } = useAuth();

  return isLogged ? children : <Navigate to="/" />;
}

function App() {
  GlobalCss();

  return (
    <Routes>
      <Route path="/" element={<h1>Hello world</h1>} />
      <Route
        path="/login"
        element={
          <PrivateRoute>
            <Login />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default App;
