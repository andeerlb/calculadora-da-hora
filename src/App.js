import { Header } from './ui/components/header/HeaderComponent';
import { GlobalStyles, LightTheme } from './styles';
import { Container } from './ui/components/container/ContainerComponent';
import { ThemeProvider } from 'styled-components';
import { MyThemeProvider, useThemeProvider } from './data/contexts/theme-context';

function App() {
  const { theme } = useThemeProvider();

  return (
    <ThemeProvider theme={LightTheme}>
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
