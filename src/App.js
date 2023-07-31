
import { Header } from './components/header';

import { GlobalStyles, LightTheme } from './styles';
import { Container } from './components/container';
import { ThemeProvider } from 'styled-components';
import { MyThemeProvider, useThemeProvider } from './contexts/theme-context';


function App() {
  const { theme } = useThemeProvider();
  console.log(theme);
  return (
    <ThemeProvider theme={LightTheme}>
      <GlobalStyles />
      <MyThemeProvider>
        <Container>
          <Header />
        </Container>
      </MyThemeProvider>
    </ThemeProvider>
  );
}

export default App;
