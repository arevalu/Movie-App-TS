import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { AppProvider } from './context/AppContext';
import Home from './views/Home';
import MovieDetail from './views/MovieDetail';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

import { theme } from './styles/theme/theme';
import GlobalStyle from './styles/global';

const App: React.FC = () => {

  return (
    <ThemeProvider theme={ theme }>
      <AppProvider>
        <Router>
          <GlobalStyle />
          <Header />
          <Sidebar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:movieId" element={<MovieDetail />} />
          </Routes>
        </Router>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
