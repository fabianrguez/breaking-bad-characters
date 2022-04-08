import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledCardOverlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background: rgba(0, 0, 0, 0.5);
  height: 100%;
  width: 100%;
  max-height: 0;
  bottom: 0;
  border-radius: inherit;
  transition: max-height 0.3s;
`;

export const StyledCardLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 100%;
  width: 100%;
  color: #fff;
  opacity: 0;
  transition: opacity 0.4s;
  transition-delay: 0.4s;
`;

export const StyledCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #cecece;
  border-radius: 8px;
  position: relative;
  overflow: hidden;

  &:hover {
    & ${StyledCardOverlay} {
      max-height: 100%;

      & ${StyledCardLink} {
        opacity: 1;
      }
    }
  }
`;

export const StyledCardImageWrapper = styled.figure`
  height: 20rem;
  width: 20rem;
  overflow: hidden;
  border-radius: inherit;
`;

export const StyledCardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
