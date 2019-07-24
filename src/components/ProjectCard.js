import React, { Component } from 'react'
// import { Dropdown } from 'semantic-ui-react'
// import { Link } from "react-router-dom";
import { Card, Icon, Image } from 'semantic-ui-react'
import { Redirect } from "react-router-dom";


export default class ProjectCard extends Component {
    state = {
        clicked: false
    }

    componentDidMount() {
        console.log("User", this.props.user)
        this.setState({
            clicked: false
        })
    }

    handleClick = () => {
        this.setState({
            clicked: true
        })
    }

    componentWillUnmount() {
        this.setState({
            clicked: false
        })
    }



    render() {
        if (this.state.clicked === true) {
            return <Redirect to={{
                pathname: '/projects/info',
                state: { project: this.props.project ,
                user: this.props.user}
            }}
            />

        }
        return ( <div className="project-box">
            <img onClick={this.handleClick}  className="project-image" src={this.props.project.image1_url} /> 
            <div className="middle">
                <div onClick={this.handleClick}  className="box-text">{this.props.project.user.id === this.props.user.id ?"Edit":"Check it out"}</div>
            </div>
            <div className='project-footer'><h4>{this.props.project.title}</h4></div>
            </div>

        )
    }
}