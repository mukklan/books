import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Create from './components/create.component';
import Index from './components/index.component';

class App extends Component {
  render() {
    return (
      <Router>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link to={'/'} className="navbar-brand">Books Api test</Link>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                      <Link to={'/'} className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                      <Link to={'/create'} className="nav-link">Create</Link>
                    </li>
                  </ul>
                </div>
            </div>
        </nav> 

        <div className="container mt-4">
          <Switch>
              <Route exact path='/create' component={ Create } />
              <Route path='/home' component={ Index } />
              <Route path='/' component={ Index } />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;