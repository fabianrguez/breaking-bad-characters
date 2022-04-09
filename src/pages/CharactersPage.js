import { CharactersList, Layout } from 'components';
import { useTranslation } from 'react-i18next';
import { useCharacters } from 'hooks';

export function CharactersPage() {
  const { characters, error, loading, loadData } = useCharacters();
  const { t } = useTranslation();

  return (
    <Layout isLoading={characters.length === 0 && loading} error={error} loadingText={t('home.loadingText')}>
      <h1>{t('home.title')}</h1>
      <CharactersList characters={characters} isLoading={loading} fetchMore={loadData} />
    </Layout>
  );
}
