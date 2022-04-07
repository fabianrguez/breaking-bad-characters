import styled from 'styled-components';

export const StyledCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: red;
`;

export const StyledCardImageWrapper = styled.figure`
  height: 20rem;
  width: 20rem;
  overflow: hidden;
`

export const StyledCardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`