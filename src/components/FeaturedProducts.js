import React, { Component } from 'react'
import { Card  } from 'semantic-ui-react'
import FeaturedProduct from './FeaturedProduct';
// import { Dropdown } from 'semantic-ui-react'



export default class FeaturedProducts extends Component {

    state = {
        products: []
    }
    componentDidMount() {
        fetch('http://localhost:3000/api/v1/products')
        .then(res => res.json())
        .then(json => this.setState({
            products: json.slice(0,4)
        }))
    }

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