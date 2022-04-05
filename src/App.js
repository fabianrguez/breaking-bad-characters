import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import './App.css';
import { getCharacters } from 'services/getCharacters';

function App() {
  const { t } = useTranslation();

  useEffect(() => {
    (async () => {
      const characters = await getCharacters();
      console.log({ characters });
    })();
  }, []);

  return (
    <div className="App">
      <h1>{t('home.title')}</h1>
    </div>
  );
}

export default App;
