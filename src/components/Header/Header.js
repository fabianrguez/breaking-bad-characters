import { LanguagePicker } from 'components/LanguagePicker';
import { StyledHeader } from './styles';

export function Header() {
  return (
    <StyledHeader>
      <LanguagePicker />
    </StyledHeader>
  );
}
