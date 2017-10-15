import React, { Component } from 'react';
import { IndexRoute, Router, Route, hashHistory } from 'react-router';

import Event from './Pages/Event';
import Home from './Pages/Home';
import Main from './Pages/Main';

class App extends Component {
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Main}>
          <IndexRoute component={Home} />
          <Route path="home" component={Home} />
          <Route path="event" component={Event} />
        </Route>
      </Router>
    );
  }
}

export default App;
