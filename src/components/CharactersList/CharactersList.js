import { CharacterCard } from 'components/CharacterCard';
import { useCharacters } from 'hooks';
import { StyledCharactersList } from './styles';

export function CharactersList() {
  const { characters, error, loading, loadData } = useCharacters();

  if (error) return <span>An error ocurred retrieving characters list ...</span>;

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <StyledCharactersList>
        {characters?.map(({ char_id, name, img }, index) => (
          <li key={`${char_id}-${index}`}>
            <CharacterCard name={name} image={img} id={char_id} />
          </li>
        ))}
      </StyledCharactersList>
      <div style={{marginBottom: '1rem'}}>
        {loading && <span>Loading characters ...</span>}
        {characters.length < 62 && !loading && <button onClick={loadData}>Load more</button>}
      </div>
    </div>
  );
}
