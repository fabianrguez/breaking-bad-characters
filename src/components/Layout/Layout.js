import { LoadingDots } from 'components';
import { Navigate } from 'react-router-dom';
import { StyledLayoutWrapper } from './styles';

export function Layout({ isLoading, error = null, loadingText = '', children }) {
  return (
    <>
      {error ? (
        <Navigate to="/error" />
      ) : (
        <StyledLayoutWrapper>{isLoading ? <LoadingDots text={loadingText} /> : children}</StyledLayoutWrapper>
      )}
    </>
  );
}
