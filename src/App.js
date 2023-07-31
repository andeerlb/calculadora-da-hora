import { ThemeProvider } from 'styled-components';
import { Header } from './components/header';

import { GlobalStyles, LightTheme } from './styles';


function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <GlobalStyles />
      <Header />
    </ThemeProvider>
  );
}

export default App;
