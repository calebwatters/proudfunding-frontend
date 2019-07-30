import React, { Component } from 'react'
import {API_ROOT} from '../constants/index'
import FeaturedProducts from '../components/FeaturedProducts'
import {Message} from 'semantic-ui-react'
export default class ProductInfo extends Component {

    state ={
        products: [], 
        productCount: 0, 
        error: false
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    componentDidUpdate() {
        window.scrollTo(0, 0)
    }

    addToCart = () => {
        let product = this.props.location.state.product
        let user = this.props.user
        let token = this.getToken()
        fetch(`${API_ROOT}/cart_items`, {
            method: 'POST',
            headers: {
                'Content-type': 'Application/json',
                'Authorization': 'Bearer ' + token
            }, 
            body: JSON.stringify({user_id: user.id, product_id: product.id})
        }).then(this.setState(prevState => {
            return {productCount: prevState.productCount + 1}
        }))
    }

    getToken(jwt) {
        return localStorage.getItem('jwt')
    }

    handleError = () => {
        this.setState({
            error: true
        })
    }

    closeError = () => {
        this.setState({
            error: false
        })
    }

    render() {


        const product = this.props.location.state.product
        const props = { product }
        
        return (
            <div>
                <div className="product-show">
                    {this.state.error ? <Message floating
                        onDismiss={this.closeError}
                        header='You must register before you can do that!'
                        content='Visit our login page, then try again'
                    /> : null}
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
                                {this.props.user !== "" ? <button className="ui button secondary" onClick={this.addToCart}>
                                    <h4><i className="ui icon cart"></i> Add to cart{this.state.productCount > 0 ? "(" + this.state.productCount + ")" : null}</h4></button>: 
                                    <button className="ui button secondary" onClick={this.handleError}>
                                        <h4><i className="ui icon cart"></i> Add to cart</h4></button>}
          
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