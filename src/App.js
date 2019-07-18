import React from 'react';
import logo from './logo.svg';
import Login from './components/Login'
import Main from './containers/Main'
import NewProject from './components/NewProject'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/projects/new' render={() => <NewProject />} />
          <Route exact path='/' render={() => <Main />} />
          <Route exact path='/login' render={() => <Login />} />
        </div>
      </Router>
    );
  }

}

export default App;
