import React, { Component } from "react";
import {Redirect} from 'react-router-dom'


export default class ProjectProduct extends Component {
    state = {
        clicked: false
    }


    handleClick = () => {
        this.setState({
            clicked: true
        })
    }


    render() {
        if (this.state.clicked === true) {
            return <Redirect to={{
                pathname: '/products/info',
                state: { product: this.props.product }
            }}
            />

        }
        return (
                <li>
                <img onClick={this.handleClick} className="ui small rounded image" src={this.props.product.image1_url} />
                <h4 style={{ textAlign: 'left' }}>{this.props.product.name}</h4></li>
        )
    }
}