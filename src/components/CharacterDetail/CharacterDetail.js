import { Button, Image } from 'components';
import { useCharacterQuote } from 'hooks';
import { useTranslation } from 'react-i18next';
import { CharacterInfo } from './CharacterInfo';
import { CharacterQuote } from './CharacterQuote';
import {
  StyledCharacterDetailContainer,
  StyledCharacterDetailHeader,
  StyledCharacterDetailInfoContainer,
  StyledCharacterDetailInfoWrapper,
  StyledCharacterDetailName,
} from './styles';

export function CharacterDetail({
  char_id,
  name,
  birthday,
  occupation,
  img,
  status,
  nickname,
  appearance,
  portrayed,
  category,
  better_call_saul_appearance,
  deaths,
}) {
  const { t } = useTranslation();

  return (
    <StyledCharacterDetailContainer>
      <StyledCharacterDetailHeader>
        <StyledCharacterDetailName>
          {name} - {nickname}
        </StyledCharacterDetailName>
        <h3>{portrayed}</h3>
      </StyledCharacterDetailHeader>
      <StyledCharacterDetailInfoWrapper>
        <Image src={img} alt={name} lightBorder big />
        <StyledCharacterDetailInfoContainer>
          <CharacterInfo
            data={{ char_id, birthday, occupation, status, appearance, category, better_call_saul_appearance }}
            sectionTitle={t('character.details.title')}
          />
          <CharacterInfo
            data={deaths}
            sectionTitle={t('character.details.titleDeaths')}
            noDataMessage={t('character.details.noDeathInfo')}
          />
          <CharacterQuote name={name}/>
        </StyledCharacterDetailInfoContainer>
      </StyledCharacterDetailInfoWrapper>
    </StyledCharacterDetailContainer>
  );
}
