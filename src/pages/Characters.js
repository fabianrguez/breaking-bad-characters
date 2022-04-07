import { useCharacters } from 'hooks';
import { useTranslation } from 'react-i18next';

export function Characters() {
  const { characters, loading } = useCharacters();
  const { t } = useTranslation();

  if (loading) return <span>Loading...</span>

  return (
    <div>
      <h1>{t('home.title')}</h1>
      <ul style={{ paddingLeft: '2rem' }}>
        {characters?.map(({ char_id, name, img }) => (
          <li key={char_id}>
            <img loading="lazy" src={img} alt={name}/>
            <h2>{name}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}
