import { StyledCard, StyledCardImage, StyledCardImageWrapper, StyledCardLink, StyledCardOverlay } from './styles';

export function CharacterCard({ image, name, id }) {
  return (
    <StyledCard>
      <StyledCardImageWrapper>
        <StyledCardImage src={image} alt={name} />
      </StyledCardImageWrapper>
      <h2>{name}</h2>
      <StyledCardOverlay>
        <StyledCardLink to={`${id}`}>Saber más...</StyledCardLink>
      </StyledCardOverlay>
    </StyledCard>
  );
}
