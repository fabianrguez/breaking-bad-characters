import { CharacterCard } from 'components';
import { Button } from 'components/Button';
import { LoadingDots } from 'components/LoadingDots';
import { useTranslation } from 'react-i18next';
import { StyledCharactersList, StyledCharactersListContainer } from './styles';

export function CharactersList({characters, isLoading, fetchMore}) {
  const { t } = useTranslation();

  return (
    <StyledCharactersListContainer>
      {characters.length === 0 && isLoading ? (
        <LoadingDots />
      ) : (
        <>
          <StyledCharactersList>
            {characters?.map(({ char_id, name, nickname, img }, index) => (
              <li key={`${char_id}-${index}`}>
                <CharacterCard name={name} image={img} id={char_id} nickname={nickname} />
              </li>
            ))}
          </StyledCharactersList>
          <div style={{ marginBottom: '1rem' }}>
            {characters.length < 62 && (
              <Button onClick={fetchMore} isLoading={isLoading} label={t('characterList.loadMore')} />
            )}
          </div>
        </>
      )}
    </StyledCharactersListContainer>
  );
}
