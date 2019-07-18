import React, { Component } from 'react'
import Header from './Header'
// import { Dropdown } from 'semantic-ui-react'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export default class NewProject extends Component {



    render() {
        
        return (
            <div>
                <Header />
                <div className="new-project-form">
                    <div className="form-fields">
                    <form className="ui form">
                            <div className="field">
                                <label style={{ color: 'white' }} >Project Title</label>
                                <input type="text"/>
                            </div>
                        
                        <div className="field">
                                <label style={{ color: 'white' }} >Project Description</label>
                            <textarea></textarea>
                        </div>
                        <div className="field">
                                <label style={{ color: 'white' }} >Company Description</label>
                            <textarea rows="2"></textarea>
                        </div>

                    </form>
                    </div>
                </div>
            </div>

        )
    }
}