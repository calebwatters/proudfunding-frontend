import React, { Component } from 'react'
// import { Dropdown } from 'semantic-ui-react'

import { Link } from "react-router-dom";


export default class Footer extends Component {


    render() {
        return (
            <div className="main-footer">
                <br></br>
                <ul className="social-icon">
                        <li><a href="https://twitter.com/calebwatters" className="fa fa-twitter"></a></li>
                        <li><a href="https://www.linkedin.com/in/caleb-watters-475093182/" className="fa fa-linkedin"></a></li>
                    <li><a href="https://github.com/calebwatters" className="fa fa-github"></a></li>
                </ul>
                <br></br>
            </div>

        )
    }
}