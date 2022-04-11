import styled from 'styled-components';

export const StlyedButtonWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 2px solid ${({theme}) => theme.colors.purple};
  color: ${({theme}) => theme.colors.purple};
  min-height: 2.5rem;
  min-width: 12rem;
  border-radius: 4px;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
`;

export const StyledButton = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: stretch;
  border: none;
  padding: 0;
  background: transparent;
  color: inherit;
  font-weight: bold;
  font-size: 18px;
`;
