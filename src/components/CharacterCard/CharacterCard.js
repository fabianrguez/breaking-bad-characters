import { Image } from 'components';
import { StyledCard, StyledCardLink, StyledCardOverlay } from './styles';

export function CharacterCard({ image, name, id }) {
  return (
    <StyledCard>
      <Image src={image} alt={name} />
      <h2>{name}</h2>
      <StyledCardOverlay>
        <StyledCardLink to={`${id}`}>Saber más...</StyledCardLink>
      </StyledCardOverlay>
    </StyledCard>
  );
}
