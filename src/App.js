import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import './App.css';
import { getCharacters } from 'services/getCharacters';

function App() {
  const [characters, setCharacters] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    (async () => {
      const _characters = await getCharacters();
      setCharacters(_characters);
    })();
  }, []);

  return (
    <div className="App">
      <h1>{t('home.title')}</h1>
      <ul style={{ paddingLeft: '2rem' }}>
        {characters?.map(({ char_id, name }) => (
          <li key={char_id}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
