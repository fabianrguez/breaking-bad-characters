import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export function NoMatchPage () {
  const {t} = useTranslation();

  return (
    <div>
      <h1>{t('noMatch.title')}</h1>
      <p>{t('noMatch.suggestion')}</p>
      <Link to="/">{t('noMatch.cta')}</Link>
    </div>
  )
}