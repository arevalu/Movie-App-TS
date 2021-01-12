import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/movie/:movieId">
              <MovieDetail />
            </Route>
          </Switch>
        </Router>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
