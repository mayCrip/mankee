import { useState, useCallback } from 'react';
import styled from 'styled-components';
import { GlobalHotKeys } from 'react-hotkeys';
import Card from './card/Card';

const AppRoot = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;

  &:focus {
    outline: none;
  }
`;

const StyledHotKeys = styled(GlobalHotKeys)`
  &:focus {
    outline: none;
  }
`;

const keyMap = {
  SHOW_BACKSIDE: 'space',
  LEFT: 'left',
  RIGHT: 'right',
  UP: 'up',
  DOWN: 'down'
};

function App() {
  const [isBacksideShown, setIsBacksideShown] = useState(false);
  const handleShowBackside = useCallback(() => {
    setIsBacksideShown(currentValue => (!currentValue));
  }, []);
  const handleArrow = useCallback(() => {
    console.log('hi');
  });

  const handlers = {
    SHOW_BACKSIDE: handleShowBackside,
    LEFT: handleArrow,
    RIGHT: handleArrow,
    UP: handleArrow,
    DOWN: handleArrow
  };

  return (
    <GlobalHotKeys keyMap={keyMap} handlers={handlers}>
      <AppRoot>
        <Card backsideShown={isBacksideShown} />
      </AppRoot>
    </GlobalHotKeys>
  );
}

export default App;
