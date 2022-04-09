import styled from 'styled-components';

export const StlyedButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid #ccc;
  min-height: 2.5rem;
  min-width: 12rem;
  padding: 0.5rem;
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
  border: none;
  padding: 0;
  background: transparent;
`;
