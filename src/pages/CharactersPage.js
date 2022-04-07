import { CharactersList } from 'components';
import { useTranslation } from 'react-i18next';

export function CharactersPage() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('home.title')}</h1>
      <CharactersList />
    </div>
  );
}
