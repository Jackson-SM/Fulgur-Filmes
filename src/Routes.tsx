import { Routes, Route } from 'react-router-dom';

import { Login } from './pages/Login';
import { GlobalCss } from './styled/GlobalCss';

function App() {
  GlobalCss();

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
