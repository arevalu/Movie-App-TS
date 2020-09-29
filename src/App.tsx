import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import GlobalStyle from './styles/global';
import Home from './views/Home';
import MovieDetail from './views/MovieDetail';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import theme from './styles/theme/theme';

import store from './redux/store'

const App: React.FC = () => {
  return (
    <Provider store={ store }>
      <ThemeProvider theme={ theme }>
        <Router>
          <GlobalStyle />
          <Header />
          {/* <Sidebar /> */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/movie/:movieId">
              <MovieDetail />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
