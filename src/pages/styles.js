import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledErrorPageWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  & h1 {
    font-size: 2.25rem;
    margin: 2rem;
    color: ${({ theme }) => theme.colors.purple};
  }
`;

export const StlyedErrorPageLink = styled(Link)`
  border: 2px solid ${({ theme }) => theme.colors.purple};
  padding: 1rem;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.purple};
`;
