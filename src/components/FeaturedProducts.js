import React, { Component } from 'react'
import { Card  } from 'semantic-ui-react'
import FeaturedProduct from './FeaturedProduct';
// import { Dropdown } from 'semantic-ui-react'
import { API_ROOT } from '../constants/index';


export default class FeaturedProducts extends Component {

    state = {
        products: []
    }
    componentDidMount() {
        fetch(`${API_ROOT}/products`)
        .then(res => res.json())
        .then(json => {
            if(this.props.current) {
                const filtered = json.filter(product => product.name !== this.props.current.name)
                this.setState({
                    products: filtered
                })
            } else {
                this.setState({
                products: json.slice(0,4)
            })
        }
    })
    }

    // componentDidUpdate() {
    //     fetch(`${API_ROOT}/products`)
    //         .then(res => res.json())
    //         .then(json => {
    //             if (this.props.current) {
    //                 const filtered = json.filter(product => product.name !== this.props.current.name)
    //                 this.setState({
    //                     products: filtered.slice(0, 4)
    //                 })
    //             } else {
    //                 this.setState({
    //                     products: json.slice(0, 4)
    //                 })
    //             }
    //         })
    // }


    render() {
        return (
            <div className="featured-products">
                <Card.Group itemsPerRow={4}>
                  {this.state.products.map(product => {
                      return <FeaturedProduct key={product.id} product={product}/>
                  })}

                </Card.Group>
            </div>

        )
    }
}