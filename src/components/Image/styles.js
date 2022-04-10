import styled from 'styled-components';

export const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.3s;
`;

export const StyledImageWrapper = styled.figure`
  height: ${({ big }) => (big ? '40rem' : '30rem')};
  width: ${({ big }) => (big ? '30rem' : '20rem')};
  overflow: hidden;
  border-radius: ${({ lightBorder }) => (lightBorder ? '6px' : 'inherit')};
  visibility: ${({ hidden }) => (hidden ? 'hidden' : 'visible')};
  opacity: ${({ hidden }) => (hidden ? 0 : 1)};
  transition: opacity 0.4s, visibility 0.6s;

  @media (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
    height: 30rem;
    width: 100%;
  }

  @media(min-width: ${({ theme }) => theme.mobileBreakpoint} ) {
    &:hover {
      & ${StyledImage} {
        transform: scale(1.1)
      }
    }
  }
`;
