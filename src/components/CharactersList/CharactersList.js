import { CharacterCard } from 'components';
import { useCharacters } from 'hooks';
import { useTranslation } from 'react-i18next';
import { StyledCharactersList, StyledCharactersListContainer } from './styles';

export function CharactersList() {
  const { characters, error, loading, loadData } = useCharacters();
  const { t } = useTranslation();

  if (error) return <span>An error ocurred retrieving characters list ...</span>;

  return (
    <StyledCharactersListContainer>
      <StyledCharactersList>
        {characters?.map(({ char_id, name, img }, index) => (
          <li key={`${char_id}-${index}`}>
            <CharacterCard name={name} image={img} id={char_id} />
          </li>
        ))}
      </StyledCharactersList>
      <div style={{ marginBottom: '1rem' }}>
        {loading && <span>Loading characters ...</span>}
        {characters.length < 62 && !loading && <button onClick={loadData}>{t('characterList.loadMore')}</button>}
      </div>
    </StyledCharactersListContainer>
  );
}
