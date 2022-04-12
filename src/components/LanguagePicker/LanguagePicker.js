import { Button } from 'components';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StlyedLanguagePickerWrapper, StyledLanguagePickerDropdown } from './styles';

const LANGUAGES = ['es', 'en'];

export function LanguagePicker() {
  const [expanded, setExapanded] = useState(false);
  const { t, i18n } = useTranslation();

  const togglePicker = () => {
    setExapanded(!expanded);
  };

  const handleBlur = (e) => {
    e.preventDefault();
    const { currentTarget, relatedTarget } = e;
    if (!currentTarget.contains(relatedTarget)) {
      if (expanded) {
        togglePicker();
      }
    }
  };

  const changeLanguage = (language) => () => {
    i18n.changeLanguage(language);
    togglePicker();
  };

  return (
    <StlyedLanguagePickerWrapper onBlur={handleBlur}>
      <Button
        outlined={false}
        ariaExpanded={expanded}
        ariaControls="language-picker-dropdown"
        label={t(`languagePicker.${i18n.language}`)}
        onClick={togglePicker}
      />
      <StyledLanguagePickerDropdown id="language-picker-dropdown" tabIndex="0" ariaExpaned={expanded} isOpen={expanded}>
        {LANGUAGES.map((language) => (
          <Button label={t(`languagePicker.${language}`)} outlined={false} onClick={changeLanguage(language)}></Button>
        ))}
      </StyledLanguagePickerDropdown>
    </StlyedLanguagePickerWrapper>
  );
}
