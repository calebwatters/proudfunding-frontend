import React, {Component} from 'react'
import { Card } from 'semantic-ui-react'
import FeaturedProduct from '../components/FeaturedProduct';
import { API_ROOT } from '../constants/index';

export default class ProductsIndex extends Component {
    state = {
        products: []
    }
    componentDidMount() {
        fetch(`${API_ROOT}/products`)
            .then(res => res.json())
            .then(json => this.setState({
                products: json
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
                    <form onSubmit={this.handleFilter} className="ui form">
                        <input className="field search-bar" type="text" placeholder="Search..."></input>
                    </form>
                    </div>
                    </div>
                    <br></br>
                </div>
                <div className="products-index">
                    <Card.Group itemsPerRow={4}>
                        {this.state.products.map(product => {
                            return <FeaturedProduct key={product.id} product={product} />
                        })}

                    </Card.Group>
                </div>
            </div>
        )
    }
}