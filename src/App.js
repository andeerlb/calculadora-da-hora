
import { Header } from './ui/components/header/HeaderComponent';
import { GlobalStyles, LightTheme } from './styles';
import { Container } from './ui/components/container/ContainerComponent';
import { ThemeProvider } from 'styled-components';
import { MyThemeProvider, useThemeProvider } from './data/contexts/theme-context';

function App() {
  const { theme } = useThemeProvider();
  console.log(theme);
  return (
    <MyThemeProvider>
      <ThemeProvider theme={LightTheme}>
        <GlobalStyles />
        <Container>
          <Header />
        </Container>
      </ThemeProvider>
    </MyThemeProvider>
  );
}

export default App;
