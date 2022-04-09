import styled from 'styled-components';

export const StyledCharacterDetailContainer = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.mobileBreakpoint}) {
    width: 60rem;
  }
`;

export const StyledCharacterDetailHeader = styled.header`
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    bottom: 0;
    border-bottom: 4px solid #cecece;
  }
`;

export const StyledCharacterDetailName = styled.h1`
  font-size: 2.5rem;

  @media (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
    font-size: 1.5rem;
  }
`;

export const StyledCharacterDetailInfoWrapper = styled.div`
  display: flex;
  padding: 2rem 0;

  & > * {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
    flex-direction: column;
  }
`;

export const StyledCharacterDetailInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1rem;

  @media (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
    margin-left: 0;
  }
`;

export const StyledCharacterDetailInfo = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
    margin-top: 1rem;
    order: 2;
  }
`;

export const StyledCharacterFeature = styled.div`
  display: flex;
  align-items: flex-start;

  & > * {
    flex: 1;
  }
`;
