import { CharacterDetail } from 'components';
import { useCharater } from 'hooks/useCharacter';
import { useParams } from 'react-router-dom';

export function CharacterDetailPage() {
  const { characterId } = useParams();
  const { character, loading, error } = useCharater(characterId);

  if (loading) return <span>Loading character info...</span>;

  // If character doesn't exists show an error
  if (error || !character) return <span>An error ocurred</span>

  console.log(character);

  return (
    <>
      <CharacterDetail {...character} />
    </>
  );
}
