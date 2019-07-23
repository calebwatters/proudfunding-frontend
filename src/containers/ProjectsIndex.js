import React, { Component } from 'react'
import { Card } from 'semantic-ui-react'
import FeaturedProduct from '../components/FeaturedProduct';
import { API_ROOT } from '../constants/index';
import ProjectCard from '../components/ProjectCard'

export default class ProjectsIndex extends Component {
    state = {
        projects: []
    }
    componentDidMount() {
        fetch(`${API_ROOT}/projects`)
            .then(res => res.json())
            .then(json => this.setState({
                projects: json
            }))
    }

    handleFilter = (ev) => {
        ev.preventDefault()
        console.log(ev.target[0].value)
        ev.target[0].value = ""
    }

    

    render() {
        return (
            <div>
                <div className="filter-header">
                    <br></br>
                    <div className="ui secondary menu  search-menu">
                        <div className="right menu">
                            <form onSubmit={this.handleFilter}className="ui form">
                                <input className="field search-bar" type="text" placeholder="Search..."></input>
                            </form>
                        </div>
                    </div>
                    <br></br>
                </div>
                {this.state.projects.length === 0? <div className="no-results"><h1>Sorry, we couldn't find anything under those search parameters</h1>
                </div>:null}
                <div className="projects-index">
                    <div className="projects-container">
                    {this.state.projects.map(project => {
                       return <ProjectCard key={project.id}project={project}/>
                    })}
                    </div>
                </div>
            </div>
        )
    }
}