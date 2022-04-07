import { CharacterDetail, Characters, NoMatch } from 'pages';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Characters />} />
      <Route path="character/:characterId" element={<CharacterDetail />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  </BrowserRouter>
);
