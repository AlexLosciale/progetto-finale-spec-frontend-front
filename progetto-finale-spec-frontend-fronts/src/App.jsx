import DefaultLayout from './layouts/DefaultLayout';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GameDettaglio from './pages/GameDettaglio';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/boardgames/:id" element={<GameDettaglio />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
