import { useTranslation } from 'react-i18next';
import { StlyedErrorPageLink, StyledErrorPageWrapper } from './styles';

export function ErrorPage() {
  const { t } = useTranslation();

  return (
    <StyledErrorPageWrapper>
      <h1>{t('errorPage.title')}</h1>
      <StlyedErrorPageLink to="/characters">{t('errorPage.backToCharacters')}</StlyedErrorPageLink>
    </StyledErrorPageWrapper>
  );
}
