import { StyledImage, StyledImageWrapper } from './styles';

export function Image({ src, alt, lightBorder, big}) {

  return (
    <>
      <StyledImageWrapper lightBorder={lightBorder} big={big}>
        <StyledImage src={src} alt={alt} />
      </StyledImageWrapper>
    </>
  );
}
