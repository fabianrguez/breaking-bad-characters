import { LoadingDots } from 'components';
import { StyledLayoutWrapper } from './styles';

export function Layout({ isLoading, error = null, loadingText = '', children }) {
  return <StyledLayoutWrapper>{isLoading ? <LoadingDots text={loadingText} /> : children}</StyledLayoutWrapper>;
}
