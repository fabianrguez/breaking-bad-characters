import { Image } from 'components';
import { StyledCard, StyledCardLink, StyledCardOverlay } from './styles';

export function CharacterCard({ image, name, nickname, id }) {
  return (
    <StyledCard>
      <Image src={image} alt={name} />
      <h2>{name}</h2>
      <h3>{nickname}</h3>
      <StyledCardOverlay>
        <StyledCardLink to={`${id}`}>Saber más...</StyledCardLink>
      </StyledCardOverlay>
    </StyledCard>
  );
}
