import React, { Component } from 'react'
import Header from '../components/Header'
import Carousel from '../components/Carousel'
import FeaturedProducts from '../components/FeaturedProducts'
import {API_ROOT} from '../constants/index'

export default class Main extends Component {

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

    render() {
        return (
                <div>
                    <Carousel projects={this.state.projects.slice(0, 3)}/>
                    <FeaturedProducts />
                </div>
        )
    }
}