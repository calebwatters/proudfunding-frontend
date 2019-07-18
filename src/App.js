import React from 'react';
import logo from './logo.svg';
import Login from './components/Login'
import Main from './containers/Main'
import NewProject from './components/NewProject'
import Header from './components/Header'
import Footer from './components/Footer'
import ProductsIndex from './containers/ProductsIndex'
import ProjectsIndex from './containers/ProjectsIndex'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path='/projects/new' render={() => <NewProject />} />
          <Route exact path='/' render={() => <Main />} />
          <Route exact path='/login' render={() => <Login />} />
          <Route exact path='/products' render={() => <ProductsIndex />} />
          <Route exact path='/projects' render={() => <ProjectsIndex />} />
          <Footer />
        </div>
      </Router>
    );
  }

}

export default App;
