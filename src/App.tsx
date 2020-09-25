import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import GlobalStyle from './theme/global';
import Home from './views/Home';
import MovieDetail from './views/MovieDetail';
import Sidebar from './components/Sidebar';


function App() {
  return (
    <Router>
      <GlobalStyle />
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
  );
}

export default App;
