import { CharacterCard } from 'components/CharacterCard';
import { useCharacters } from 'hooks';

export function CharactersList() {
  const { characters, error, loading, loadMore } = useCharacters();

  if (error) return <span>An error ocurred retrieving characters list ...</span>;

  return (
    <>
      <ul style={{ paddingLeft: '2rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', padding: '2rem', gap: '1rem' }}>
        {characters?.map(({ char_id, name, img }, index) => (
          <li key={`${char_id}-${index}`}>
            <CharacterCard name={name} image={img} />
          </li>
        ))}
      </ul>
      {loading && <span>Loading characters ...</span>}
      {characters.length < 62 && <button onClick={loadMore}>Load more</button>}
    </>
  );
}
