
import { Header } from './components/header';

import { GlobalStyles } from './styles';
import { Container } from './components/container';
import { ThemeProvider } from 'styled-components';
import { useThemeProvider } from './contexts/theme-context';
import HourCalculator from './ui/components/HourCalculator';

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
