import { useState } from 'react';
import { StlyedLanguagePickerWrapper, StyledLanguagePickerDropdown } from './styles';

export function LanguagePicker() {
  const [expanded, setExapanded] = useState(false);

  const togglePicker = (e) => {
    console.log(e);
    setExapanded(!expanded);
  };

  return (
    <StlyedLanguagePickerWrapper onBlur={(e) => {console.log(e)}}>
      <button aria-expanded={expanded} aria-controls="language-picker-dropdown" onClick={togglePicker}>
        <span>Español</span>
      </button>
      <StyledLanguagePickerDropdown id="language-picker-dropdown" tabIndex="0" ariaExpaned={expanded} isOpen={expanded}>
        <span>Español</span>
        <span>English</span>
      </StyledLanguagePickerDropdown>
    </StlyedLanguagePickerWrapper>
  );
}
