import React, { Component } from 'react'
import Header from './Header'
// import { Dropdown } from 'semantic-ui-react'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";


export default class NewProject extends Component {


    handleSubmit = (ev) => {
        ev.preventDefault()
    }

    render() {
        
        return (
            <div>
                <div className="new-project-form"> 
                    <div className="form-fields">
                    <form onSubmit={this.handleSubmit}className="ui form">
                            <h1 style={{color: 'white'}}>Get Started!</h1>
                            <div className="field">
                                <label style={{ color: 'white' }} >Project Title</label>
                                <input type="text" placeholder="GoFundMe"/>
                            </div>
                        
                        <div className="field">
                                <label style={{ color: 'white' }} >Project Description</label>
                            <textarea rows="3" placeholder="Stuff and things..."></textarea>
                        </div>
                        <div className="field">
                                <label style={{ color: 'white' }} >Company Name</label>
                            <input rows="1" placeholder="Boring Company"></input>
                        </div>

                            <div className="field">
                                <label style={{ color: 'white' }} >Company Link Address</label>
                                <input rows="1" placeholder="https://example.com"></input>
                            </div>

                            <div className="field">
                                <label style={{ color: 'white' }} >Project Image Url</label>
                                <input rows="1" placeholder="https://example.com"></input>
                            </div>

                        <div>
                            <button className="ui button">Create Project</button>
                        </div>

                    </form>
                    </div>
                </div>
            </div>

        )
    }
}