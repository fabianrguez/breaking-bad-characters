import { CharacterDetailPage, CharactersPage, ContainerPage, NoMatchPage } from 'pages';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

export const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/characters" element={<ContainerPage />}>
        <Route index element={<CharactersPage />} />
        <Route path=":characterId" element={<CharacterDetailPage />} />
      </Route>
      <Route path="/" element={<Navigate to="/characters" />} />
      <Route path="*" element={<NoMatchPage />} />
    </Routes>
  </BrowserRouter>
);
