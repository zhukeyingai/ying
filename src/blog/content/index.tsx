import { animationDelay, mainContainerStyle } from '@/blog/style';
import { routeList } from '@/routes';
import { FC, memo, useEffect, useRef } from 'react';
import { matchRoutes, useLocation, useNavigation, useOutlet } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';

const Content: FC = memo(() => {
  const containerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const currentRoute = matchRoutes(routeList, location)?.at(-1)?.route;
  const currentOutlet = useOutlet(currentRoute?.path);
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === 'idle') {
      setTimeout(() => {
        containerRef.current?.scrollTo(0, 0);
      }, 300);
    }
  }, [navigation.state]);

  return (
    <div css={mainContainerStyle} ref={containerRef}>
      <SwitchTransition>
        <CSSTransition key={location.pathname} timeout={300} mountOnEnter unmountOnExit in>
          <div css={animationDelay}>{currentOutlet}</div>
        </CSSTransition>
      </SwitchTransition>
    </div>
  );
});

export default Content;
