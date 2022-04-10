import { useTranslation } from 'react-i18next';
import { Button } from 'components';
import { useCharacterQuote } from 'hooks';
import { StyledNoInfoAvailable } from './styles';

export function CharacterQuote({ name }) {
  const { quote, loading: quoteLoading, getNewQuote } = useCharacterQuote(name);
  const { t } = useTranslation();

  return (
    <>
      {quote === '' && !quoteLoading ? (
        <StyledNoInfoAvailable>
          *Ninguna frase célebre registrada
        </StyledNoInfoAvailable>
      ) : (
        <>
          <blockquote>{quote}</blockquote>
          <Button onClick={getNewQuote} isLoading={quoteLoading} label={t('character.details.newQuote')} />
        </>
      )}
    </>
  );
}
