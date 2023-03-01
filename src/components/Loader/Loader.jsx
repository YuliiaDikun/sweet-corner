import { ThreeCircles } from 'react-loader-spinner';
import { theme } from '../../styles/theme';
import { LoaderWrapper } from './Loader.styled';
import  ReactDOM  from 'react';
export default function Loader() {
  return ReactDOM.createPortal(
    <LoaderWrapper>
      <ThreeCircles
        color={theme.colors.accent}
        innerCircleColor={theme.colors.dark}
        ariaLabel="three-circles-rotating"
        height="150"
        width="150"
      />
    </LoaderWrapper>, document.getElementById('loader')
  );
}