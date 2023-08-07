import React from 'react';
import { Header } from './ui/components/header/HeaderComponent';
import { GlobalStyles } from './styles';
import { Container } from './ui/components/container/ContainerComponent';
import { ThemeProvider } from 'styled-components';
import { useThemeProvider } from './data/contexts/theme-context';

function App() {
  const { theme } = useThemeProvider();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Container>
        <Header />
      </Container>
    </ThemeProvider>
  );
}

export default App;
