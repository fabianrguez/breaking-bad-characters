import { LoadingDots } from 'components';
import { StlyedButtonWrapper, StyledButton } from './styles';

export const Button = ({ onClick, isLoading = false, label, outlined = true, children }) => (
  <StlyedButtonWrapper outlined={outlined}>
    {isLoading ? (
      <span>
        <LoadingDots />
      </span>
    ) : (
      <StyledButton onClick={onClick}>
        {label}
        {children}
      </StyledButton>
    )}
  </StlyedButtonWrapper>
);
