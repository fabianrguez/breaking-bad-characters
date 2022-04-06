import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { getCharacters } from 'services/getCharacters';
import { Outlet } from 'react-router-dom';

export function Characters() {
  const [characters, setCharacters] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    (async () => {
      const _characters = await getCharacters();
      setCharacters(_characters);
    })();
  }, []);

  return (
    <>
      <h1>{t('home.title')}</h1>
      <ul style={{ paddingLeft: '2rem' }}>
        {characters?.map(({ char_id, name }) => (
          <li key={char_id}>{name}</li>
        ))}
      </ul>
      <Outlet />
    </>
  );
}
