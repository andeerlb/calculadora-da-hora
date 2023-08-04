import React from 'react';
import { Header } from './ui/components/header/HeaderComponent';
import { DarkTheme, GlobalStyles } from './styles';
import { Container } from './ui/components/container/ContainerComponent';
import { ThemeProvider } from 'styled-components';
import { MyThemeProvider } from './data/contexts/theme-context';

function App() {

  return (
    <ThemeProvider theme={DarkTheme}>
      <MyThemeProvider>
        <GlobalStyles />
        <Container>
          <Header />
        </Container>
      </MyThemeProvider>
    </ThemeProvider>
  );
}

export default App;
