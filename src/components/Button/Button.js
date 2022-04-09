import { LoadingDots } from 'components';
import { StlyedButtonWrapper, StyledButton } from './styles';

export const Button = ({ onClick, isLoading = false, label }) => (
  <StlyedButtonWrapper>
    {isLoading ? (
      <span>
        <LoadingDots />
      </span>
    ) : (
      <StyledButton onClick={onClick}>{label}</StyledButton>
    )}
  </StlyedButtonWrapper>
);
