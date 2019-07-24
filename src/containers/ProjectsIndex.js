import React, { Component } from 'react'
import FeaturedProduct from '../components/FeaturedProduct';
import { API_ROOT } from '../constants/index';
import ProjectCard from '../components/ProjectCard'
import { Dimmer, Loader, Search, Segment, Card } from 'semantic-ui-react'
import _ from 'lodash'

export default class ProjectsIndex extends Component {
    state = {
        projects: [], 
        filtered: []
    }
    componentDidMount() {
        fetch(`${API_ROOT}/projects`)
            .then(res => res.json())
            .then(json => this.setState({
                projects: json, 
                filtered: json
            }))
    }

    handleFilter = (e, semanticProps) => {
        e.preventDefault()
        let input = semanticProps.value
        input = input.toLowerCase()
        if(input !== '') {
            const filtered = this.state.projects.filter(project => {
                return project.title.toLowerCase().includes(input)
            })
            this.setState({
                filtered: filtered
            })
        } else {
            this.setState({
                filtered: this.state.projects
            })
        }
        // semanticProps.value = "" 
    }

    

    render() {
        return (
            <div>
                <div className="filter-header">
                    <br></br>
                    <div className="ui secondary menu  search-menu">
                        <div className="right menu">
                                <Search placeholder="search projects" className="search-bar" onSearchChange={_.debounce(this.handleFilter, 500)} showNoResults={false} />
                        </div>
                    </div>
                    <br></br>
                </div>
                {this.state.projects.length === 0 ? <div className="no-results">
                    <Dimmer active inverted>
                        <Loader content='Loading' />
                    </Dimmer>

                </div>:null}

                {this.state.filtered.length === 0 ? <div className="not-found">
                    <h2 style={{ color: 'white' }}>No items match that search criteria</h2>

                </div> : null}
                <div className="projects-index">
                    <div className="projects-container">
                    {this.state.filtered.map(project => {
                       return <ProjectCard user={this.props.user} key={project.id}project={project}/>
                    })}
                    </div>
                </div>
            </div>
        )
    }
}