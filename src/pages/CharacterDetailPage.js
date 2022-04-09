import { CharacterDetail, Layout } from 'components';
import { useCharacter } from 'hooks';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

export function CharacterDetailPage() {
  const { characterId } = useParams();
  const { character, loading, error } = useCharacter(characterId);
  const { t } = useTranslation();

  // If character doesn't exists show an error or redirect to an error page
  // if (error || !character) return <span>An error ocurred</span>

  return (
    <Layout isLoading={loading} error={error || !character} loadingText={t('characterPage.loadingText')}>
      <CharacterDetail {...character} />
    </Layout>
  );
}
