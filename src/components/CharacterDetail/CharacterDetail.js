import { Button, Image } from 'components';
import { useCharacterQuote } from 'hooks';
import { useTranslation } from 'react-i18next';
import {
  StyledCharacterDetailContainer,
  StyledCharacterDetailHeader,
  StyledCharacterDetailInfo,
  StyledCharacterDetailInfoContainer,
  StyledCharacterDetailInfoWrapper,
  StyledCharacterDetailName,
  StyledCharacterFeature
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
}) {
  const { quote, loading: quoteLoading, getNewQuote } = useCharacterQuote(name);
  const { i18n, t } = useTranslation();

  const getArrayInfo = (value) => {
    return new Intl.ListFormat(i18n.language || 'es', { type: 'conjunction' }).format(value.map(String));
  };

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
          <StyledCharacterDetailInfo>
            <h4>{t('character.details.title')}</h4>
            {Object.entries({
              char_id,
              birthday,
              occupation,
              status,
              appearance,
              category,
              better_call_saul_appearance,
            }).map(([key, value], index) => (
              <StyledCharacterFeature key={index}>
                <span>{t(`character.details.${key}`)}:</span>
                {Array.isArray(value) ? <span>{getArrayInfo(value)}</span> : <span>{value}</span>}
              </StyledCharacterFeature>
            ))}
          </StyledCharacterDetailInfo>
          {quote !== '' && (
            <>
              <blockquote>{quote}</blockquote>
              <Button onClick={getNewQuote} isLoading={quoteLoading} label={t('character.details.newQuote')} />
            </>
          )}
        </StyledCharacterDetailInfoContainer>
      </StyledCharacterDetailInfoWrapper>
    </StyledCharacterDetailContainer>
  );
}
