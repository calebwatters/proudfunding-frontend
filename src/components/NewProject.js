import React, { Component } from 'react'
import { API_ROOT } from '../constants/index';
import { Redirect } from "react-router-dom";



export default class NewProject extends Component {

    state ={
        submitted: false
    }
    handleSubmit = (ev) => {
        ev.preventDefault()
        if(this.props.user !== '') {

      
        let token = this.getToken()
        let user = this.props.user
        let title = ev.target[0].value
        let description = ev.target[1].value
        let companyName = ev.target[2].value
        let companyUrl = ev.target[3].value
        let imageUrl = ev.target[4].value
        let goal = ev.target[5].value
        //TODO write case switch to make sure required fields are filled in

        fetch(`${API_ROOT}/projects`, {
            method: 'POST', 
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-type': 'Application/json'
            }, 
            body: JSON.stringify({project: {title: title, user_id: user.id, description: description,
                 company_name: companyName, company_url: companyUrl, 
                 funding_goal: goal, image1_url: imageUrl, current_funding: 0}})
        }).then(res => res.json())
        .then(json => this.setState({
            submitted: true
        }))
        }
    }

    getToken(jwt) {
        return localStorage.getItem('jwt')
    }

    render() {
          if (this.state.submitted === true) {
            return <Redirect to={{
                pathname: '/user/dashboard',
            }}
            />
        }
        
        return (
            <div>
                {this.props.user === '' ? <div className="ui warning message">
                    <i className="close icon"></i>
                    <div className="header">
                        You must register before you can do that!
                    </div>
                    Visit our login page, then try again
                </div> :null}
      

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
                            
                            <div className="field">
                                <label style={{ color: 'white' }} >Funding Goal</label>
                                <input rows="1" placeholder="10000"></input>
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