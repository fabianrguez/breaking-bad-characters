import { Characters } from 'pages/Characters';
import { SingleCharacter } from 'pages/SingleCharacter';
import { BrowserRouter, Route, Routes, Navigate, Outlet } from 'react-router-dom';

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path="characters" element={<Characters />}>
        <Route index element={<SingleCharacter />} />
        <Route path=":characterId" element={<SingleCharacter />} />
      </Route>
      <Route path="*" element={<Navigate to="/characters" replace />} />
    </Routes>
  </BrowserRouter>
);
