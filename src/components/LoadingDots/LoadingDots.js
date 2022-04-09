import { StyledLoadingDots, StyledLoadingDotsWrapper } from './styles';

export const LoadingDots = ({ text }) => (
  <StyledLoadingDotsWrapper>
    <StyledLoadingDots />
    {text && <span>{text}</span>}
  </StyledLoadingDotsWrapper>
);
