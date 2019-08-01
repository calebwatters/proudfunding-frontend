import React, { Component } from 'react'
// import { Dropdown } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import UserDropdown from './UserDropdown'


export default class Header extends Component {


    render() {
        return (
            <div className="main-header">
                <div><h1 className="page-logo"><i className="money bill alternate icon"></i> ProudFunding</h1></div>
                <div className="ui primary secondary pointing menu inverted ">
                        <Link className="item" to="/">Home</Link>
                        <Link className="item" to="/projects/new" >Get Funded</Link>
                        <Link className="item" to="/projects" >Projects</Link>
                        <Link className="item" to="/products" >Products</Link>
                  
                    <div className="right menu">
                        {this.props.loggedIn === false ? <Link className="item" to="/login" >Login with Google</Link> : <UserDropdown user={this.props.user} />}
                        
                    </div>
                </div>
            </div>

        )
    }
}