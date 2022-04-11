import styled from 'styled-components';

export const StlyedLanguagePickerWrapper = styled.div`
  position: relative;
  width: 12rem;
  font-size: 1rem;

  & button {
    background: transparent;
    width: 100%;
    border: none;
    outline: none;
    color: inherit;
    font-size: inherit;
  }
`;

export const StyledLanguagePickerDropdown = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({theme}) => theme.colors.cardBackground};
  width: 100%;
  top: 100%;
  border-radius: 3px;
  z-index: 2;
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-1.875rem)')};
  transition: all 0.4s;
`;
