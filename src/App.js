import React from 'react';
import logo from './logo.svg';
import Login from './components/Login'
import Main from './containers/Main'
import NewProject from './components/NewProject'
import Header from './components/Header'
import Logout from './components/Logout'
import Footer from './components/Footer'
import Checkout from './components/Checkout'
import ProductsIndex from './containers/ProductsIndex'
import ProjectsIndex from './containers/ProjectsIndex'
import UserAccount from './containers/UserAccount'
import UserDashboard from './containers/UserDashboard'
import UserCart from './containers/UserCart'
import ProjectInfo from './containers/ProjectInfo'
import ProductInfo from './containers/ProductInfo'



import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import './App.css';
import {API_ROOT} from './constants/index'

class App extends React.Component {
  state = {
    loggedIn: false,
    user: ''
  }
  constructor() {
    super()
    if (this.getToken()) {
      this.getProfile()
    }
  }

  getToken(jwt) {
    return localStorage.getItem('jwt')
  }

  getProfile = () => {
    let token = this.getToken()
    fetch(`${API_ROOT}/profile`, {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    })
      .then(res => res.json())
      .then(json => {
        console.log('profile:', json)
        this.setState({
          user: json.user
        })
        this.handleLogin(json.user)
      })
  }

  handleLogin = (user) =>  {
    this.setState({
      loggedIn: true,
       user: user
    })
  }

  handleLogout = () => {
    this.clearToken()
    this.setState({
      loggedIn: false,
      user: ''
    })
  }

  clearToken(jwt) {
    localStorage.setItem('jwt', '')
  }


  render() {
    return (
      <Router>
        <div className="App">
          <Header user={this.state.user} loggedIn={this.state.loggedIn}/>
          <Route exact path='/' render={() => <Main user={this.state.user} />} />
          <Route exact path='/projects/new' render={() => <NewProject user={this.state.user} loggedIn={this.state.loggedIn}/>} />
          <Route exact path='/user/checkout' render={() => <Checkout user={this.state.user}  />} />
          <Route exact path='/user/logout' render={() => <Logout user={this.state.user} logout={this.handleLogout} loggedIn={this.state.loggedIn} />} />
          <Route exact path='/user/account' render={() => <UserAccount user={this.state.user} />} />
          <Route exact path='/user/dashboard' render={() => <UserDashboard user={this.state.user} />} />
          <Route exact path='/user/cart' render={() => <UserCart user={this.state.user} />} />
          <Route exact path='/login' render={() => <Login handleLogin={this.handleLogin}loggedIn={this.state.loggedIn}/>} />
          <Route exact path='/products' render={() => <ProductsIndex />} />
          <Route
            path='/products/info'
            render={(props) => <ProductInfo {...props} user={this.state.user} />}
          />
          <Route
            path='/projects/info'
            render={(props) => <ProjectInfo {...props} user={this.state.user} />}
          />
          <Route exact path='/projects' render={() => <ProjectsIndex user={this.state.user} />} />
          <Footer />
        </div>
      </Router>
    );
  }

}

export default App;
