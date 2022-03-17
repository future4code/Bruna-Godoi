import React from 'react';
import Router from './routes/Router';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './constants/theme';
import styled from 'styled-components';

const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <ScreenContainer>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </ScreenContainer>
  );
}

export default App;
