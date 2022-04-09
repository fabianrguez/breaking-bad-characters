import { LoadingDots } from 'components';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { StyledLayoutWrapper } from './styles';

export function Layout({ isLoading, error = null, loadingText = '', children }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (error) {
      console.log({error});
      // navigate('/error');
    }
  }, [error]);

  return <StyledLayoutWrapper>{isLoading ? <LoadingDots text={loadingText} /> : children}</StyledLayoutWrapper>;
}
