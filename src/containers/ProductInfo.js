import React, { Component } from 'react'
import {API_ROOT} from '../constants/index'
import {Card} from 'semantic-ui-react'
import FeaturedProducts from '../components/FeaturedProducts'
import Carousel from '../components/Carousel'

export default class ProductInfo extends Component {

    state ={
        products: []
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    componentDidUpdate() {
        window.scrollTo(0, 0)
    }

    render() {


        const product = this.props.location.state.product
        const props = { product }
        
        return (
            <div>
                <div className="product-show">
                    <div className="ui grid product-info">
                        <div className="four wide column">
                            <div className="product-images">
                                <br></br>
                                <img className="ui image medium"src={props.product.image1_url} />
                                <br></br>
                                <img className="ui image tiny" src={props.product.image3_url} />
                                <br></br>
                                <img className="ui image tiny" src={props.product.image2_url} />
                            </div>
                        </div>

                        <div className="eight wide column">
                            <h1>{props.product.name}</h1>
                            <div className="ui divider"></div>
                            <br></br>
                            <div style={{textAlign: 'left'}}>
                                    <h3>Price: ${props.product.price}</h3>
                                    <p>{props.product.description}</p>
                            </div>
                        </div>

                        <div className="four wide column">
                            <div className="product-shipping">
                                <br></br>
                                <h2>Ordering Preferences</h2>
                                <div className="ui divider"></div>
                                    <br></br>
                                <button className="ui button secondary"><h4><i className="ui icon cart"></i> Add to cart</h4></button>
                            </div>
                        </div>

                    </div>

                    
                </div>
                <div><h2 style={{color: 'white'}}>You may also be interested in...</h2></div>
                <FeaturedProducts current={this.props.location.state.product}/>

            </div> 
        )
    }
}