import { useCharater } from 'hooks/useCharacter';
import { useParams } from 'react-router-dom';

export function CharacterDetailPage() {
  const { characterId } = useParams();
  const { character, loading, error } = useCharater(characterId);

  if (loading) return <span>Loading character info...</span>;

  return (
    <div>
      <h1>{character.name}</h1>
      <ul>
        <li>
          <span>Nickname:</span> {character.nickname}
        </li>
      </ul>
    </div>
  );
}
