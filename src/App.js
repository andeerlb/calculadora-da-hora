import { ThemeProvider } from 'styled-components';
import { Header } from './components/header';

import { GlobalStyles, LightTheme } from './styles';
import { Container } from './components/container';


function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <GlobalStyles />
      <Container>
        <Header />
      </Container>
    </ThemeProvider>
  );
}

export default App;
