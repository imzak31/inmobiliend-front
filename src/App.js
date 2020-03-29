import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import history from './services/history.service';
import Home from './pages/home/home.page';
import Login from './pages/login/login.page';
import SignUp from './pages/signup/signup.page';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends React.Component {
  state = {
    user: null
  }

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/register" component={SignUp} />
        </Switch>
      </Router>
    );
  }
}

export default App;
