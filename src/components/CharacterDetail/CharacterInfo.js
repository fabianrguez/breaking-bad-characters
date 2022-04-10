import { useTranslation } from 'react-i18next';
import {
  StyledCharacterDetailInfo, StyledCharacterFeature,
  StyledCharacterFeatureName, StyledNoInfoAvailable
} from './styles';

export function CharacterInfo({ data, sectionTitle, noDataMessage = '' }) {
  const { t, i18n } = useTranslation();

  const getArrayInfo = (value) => {
    return new Intl.ListFormat(i18n.language || 'es', { type: 'conjunction' }).format(value.map(String));
  };

  return (
    <StyledCharacterDetailInfo>
      {Object.keys(data).length === 0 ? (
        <StyledNoInfoAvailable>
          *{noDataMessage}
        </StyledNoInfoAvailable>
      ) : (
        <>
          <h4>{sectionTitle}</h4>
          {Object.entries(data).map(([key, value], index) => (
            <StyledCharacterFeature key={index}>
              <StyledCharacterFeatureName>{t(`character.details.${key}`)}:</StyledCharacterFeatureName>
              {Array.isArray(value) ? <span>{getArrayInfo(value)}</span> : <span>{value}</span>}
            </StyledCharacterFeature>
          ))}
        </>
      )}
    </StyledCharacterDetailInfo>
  );
}
