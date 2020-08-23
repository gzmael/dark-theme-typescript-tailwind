import React from 'react';

import SingIn from './pages/SingIn';
import { GlobalStyle } from './styles/globals';
import { ThemeProvider } from './context/ThemeContext';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <SingIn />
    </ThemeProvider>
  );
};

export default App;
