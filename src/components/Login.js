import React, { Component } from 'react';

import GoogleLogin from 'react-google-login';
import Header from './Header'
import { Redirect } from "react-router-dom";
class Login extends Component {

    state = { modalOpen: false }

    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => this.setState({ modalOpen: false })

    handleLogin = () => {
        
    }

    successGoogle = (response) => {
        console.log(response);
        console.log('redirect')
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
                    <div className="main-header">
                        <br></br>
                         <h2 className="page-logo"> Get Started With <i className="money bill alternate icon"></i> ProudFunding!</h2>
                         <br></br>
                        </div> 

                                <GoogleLogin
                                    className="google-button"
                                    clientId="575822940541-u0itgjjbo7v6o0t4cr2163qj95gpnoak.apps.googleusercontent.com"
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
