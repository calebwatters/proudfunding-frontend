import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import { Redirect } from "react-router-dom";
import { API_ROOT } from '../constants/index';
class Login extends Component {

    state = {
        LoggedIn: false
    }

    constructor() {
        super()
        if (this.getToken()) {
            this.getProfile()
        }

        this.logout = this.logout.bind(this)
    }

    login = (email, name, image_url, token) => {

        console.log('log in')
        fetch(`${API_ROOT}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ user: { email, name, image_url, token } })
        })
            .then(res => res.json())
            .then(json => {
                console.log('login:', json)
                if (json && json.jwt) {
                    this.saveToken(json.jwt)
                    this.getProfile()
                } else {
                    alert(json.message)
                }
            })
    }

    saveToken(jwt) {
        localStorage.setItem('jwt', jwt)

    }

    getProfile = () => {
        let token = this.getToken()
        fetch(`${API_ROOT}/profile`, {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json"
          }
        })
          .then(res => res.json())
          .then(json => {
            console.log("profile:", json);
            this.props.handleLogin(json.user);
          });
    }

    logout() {
        this.clearToken()
        this.props.handleLogout()
        return false
    }



    clearToken(jwt) {
        localStorage.setItem('jwt', '')
    }

    getToken(jwt) {
        return localStorage.getItem('jwt')
    }


    successGoogle = (response) => {
       console.log(response)
        let profile = response.profileObj
        let image = profile.imageUrl
        let name = profile.name
        let email = profile.email
        let token = response.Zi.id_token
        this.login(email, name, image, token)
        this.setState({
            loggedIn: true
        })
    }

    render() {

   

        const responseGoogle = (response) => {
            console.log('error', response);
        }
   
        if(this.state.loggedIn === true) {
            return <Redirect to="/"/>
        }
    

        return (
            
            <div>
                <div className="login-page">
                    <div className="login-header">
                        <br></br>
                         <h2 className="page-logo"> Get Started With <i className="money bill alternate icon"></i> ProudFunding!</h2>
                         <br></br>
                        </div> 

                                <GoogleLogin
                                    className="google-button"
                                    clientId="575822940541-cqari6p7tfa37h8j07998endnbvkkfh5.apps.googleusercontent.com"
                                    buttonText="LOGIN WITH GOOGLE"
                                    onSuccess={this.successGoogle}
                                    onFailure={responseGoogle}
                                />
                </div>
            </div>
        );
    }
}

export default Login;
