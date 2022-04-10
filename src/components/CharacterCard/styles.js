import { StyledImage, StyledImageWrapper } from 'components/Image/styles';
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

  @media (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
    background: transparent;
    max-height: 100%;
  }
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
  min-height: 320px;
  min-width: 320px;
  max-width: 320px;

  & ${StyledImageWrapper} {
    width: 100%;
  }

  @media (min-width: ${({ theme }) => theme.mobileBreakpoint}) {
    &:hover {
      & ${StyledCardOverlay} {
        max-height: 100%;

        & ${StyledCardLink} {
          opacity: 1;
        }
      }
      & ${StyledImage} {
        transform: scale(1.1);
      }
    }
  }
`;
