import React, {Component} from 'react'
import { Card, Dimmer, Loader, Search } from 'semantic-ui-react'
import FeaturedProduct from '../components/FeaturedProduct';
import { API_ROOT } from '../constants/index';
import _ from 'lodash'
export default class ProductsIndex extends Component {
    state = {
        products: [],
        filtered: []
    }
    componentDidMount() {
        fetch(`${API_ROOT}/products`)
            .then(res => res.json())
            .then(json => this.setState({
                products: json, 
                filtered: json
            }))
    }

    handleFilter = (e, semanticProps) => {
        e.preventDefault()
        let input = semanticProps.value
        input = input.toLowerCase()
        if (input !== '') {
            const filtered = this.state.products.filter(product => {
                return product.name.toLowerCase().includes(input)
            })
            this.setState({
                filtered: filtered
            })
        } else {
            this.setState({
                filtered: this.state.products
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
                                <Search placeholder="search products" className="search-bar" onSearchChange={_.debounce(this.handleFilter, 500)} showNoResults={false} />
                    </div>
                    </div>
                    <br></br>
                </div>
                {this.state.products.length === 0 ? <div className="no-results">
                    <Dimmer active inverted>
                        <Loader content='Loading' />
                    </Dimmer>

                </div> : null}

                {this.state.filtered.length === 0 ? <div className="not-found">
                    <h2 style={{color: 'white'}}>No items match that search criteria</h2>

                </div> : null}

                <div className="products-index">
                    <Card.Group itemsPerRow={4}>
                        {this.state.filtered.map(product => {
                            return <FeaturedProduct key={product.id} product={product} />
                        })}

                    </Card.Group>
                </div>
            </div>
        )
    }
}