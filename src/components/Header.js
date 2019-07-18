import React, { Component } from 'react'
// import { Dropdown } from 'semantic-ui-react'
import { Link } from "react-router-dom";


export default class Header extends Component {


    render() {
        return (
            <div className="main-header">
                <div ><h1 className="page-logo"><i className="money bill alternate icon"></i> ProudFunding</h1>


                </div>

                <div className="ui primary secondary pointing menu inverted ">
                        <Link className="item" to="/">Home</Link>
                        <Link className="item" to="/projects/new" >Get Funded</Link>
                    <a className="item">
                        Projects
                    </a>
                    <a className="item">
                        Products
                    </a>
                
                    <div className="right menu">
                        <Link className="item" to="/login" >Login</Link>
                    </div>
                </div>
            </div>

        )
    }
}