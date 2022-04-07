import { StyledCard, StyledCardImage, StyledCardImageWrapper } from './styles';

export function CharacterCard({ image, name }) {
  return (
    <StyledCard>
      <StyledCardImageWrapper>
        <StyledCardImage src={image} alt={name}/>
      </StyledCardImageWrapper>
      <h2>{name}</h2>
    </StyledCard>
  );
}
