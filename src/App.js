import { ThemeProvider } from 'styled-components';
import { Header } from './components/header';
import { GlobalStyles } from './styles/global-styles';
import { LightTheme } from './styles/themes';

function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <GlobalStyles />
      <Header />
    </ThemeProvider>
  );
}

export default App;
