import styled, { keyframes } from 'styled-components';

const dotFalling = ({ theme }) => keyframes`
    0% {
    box-shadow: 9999px -15px 0 0 rgba(152, 128, 255, 0);
  }
  25%,
  50%,
  75% {
    box-shadow: 9999px 0 0 0 ${theme.colors.purple};
  }
  100% {
    box-shadow: 9999px 15px 0 0 rgba(152, 128, 255, 0);
  }
`;

const dotFallingBefore = ({ theme }) => keyframes`
  0% {
    box-shadow: 9984px -15px 0 0 rgba(152, 128, 255, 0);
  }
  25%,
  50%,
  75% {
    box-shadow: 9984px 0 0 0 ${theme.colors.purple};
  }
  100% {
    box-shadow: 9984px 15px 0 0 rgba(152, 128, 255, 0);
  }
`;

const dotFallingAfter = ({ theme }) => keyframes`
  0% {
    box-shadow: 10014px -15px 0 0 rgba(152, 128, 255, 0);
  }
  25%,
  50%,
  75% {
    box-shadow: 10014px 0 0 0 ${theme.colors.purple};
  }
  100% {
    box-shadow: 10014px 15px 0 0 rgba(152, 128, 255, 0);
  }
`;

export const StyledLoadingDotsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & span {
    margin-top: 0.75rem;
  }
`;

export const StyledLoadingDots = styled.div`
  position: relative;
  left: -9999px;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.colors.purple};
  color: ${({ theme }) => theme.colors.purple};
  box-shadow: 9999px 0 0 0 ${({ theme }) => theme.colors.purple};
  animation: ${dotFalling} 1s infinite linear;
  animation-delay: 0.1s;

  &::before,
  &::after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
  }

  &::before {
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.purple};
    color: ${({ theme }) => theme.colors.purple};
    animation: ${dotFallingBefore} 1s infinite linear;
    animation-delay: 0s;
  }

  &::after {
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: ${({ theme }) => theme.colors.purple};
    color: ${({ theme }) => theme.colors.purple};
    animation: ${dotFallingAfter} 1s infinite linear;
    animation-delay: 0.2s;
  }
`;
