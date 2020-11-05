import { Component } from 'react';
import Home from './components/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

/**
 * yadickson vasquez
 * 27/07/2020
 */
class App extends Component {

  render() {
    var React = require('react');

    
    return (
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
      </BrowserRouter>
    );
  }

}

export default App;

