import { CharacterDetail, Layout } from 'components';
import { useCharacter } from 'hooks';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';

export function CharacterDetailPage() {
  const { characterId } = useParams();
  const { character, loading, error } = useCharacter(characterId);
  const { t } = useTranslation();

  return (
    <Layout isLoading={loading} error={(error)} loadingText={t('characterPage.loadingText')}>
      <CharacterDetail {...character} />
    </Layout>
  );
}
