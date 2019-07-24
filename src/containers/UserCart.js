import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import { API_ROOT } from '../constants/index'
export default class UserCart extends Component {

    state = {
        checkout: false, 
        items: []
    }
    componentDidMount() {
        fetch(`${API_ROOT}/cart_items`)
        .then(res => res.json())
        .then(json => this.setState({
            items: json
        }))


        window.scrollTo(0, 0)

    }

    handleCheckout = () => {
        this.setState({
            checkout: true
        })
    }

    render() {

        if(this.state.checkout) {
            return <Redirect to={{
                pathname: '/user/checkout'
            }}
            />
        }
        return (
            <div>
                <div className="project-show">
                    <div className="ui grid">
                    
                        <div className="twelve wide column">
                         <h2>Items in your cart: </h2>
                         <div className="ui divider"></div>
                         <button onClick={this.handleCheckout}style={{float: 'right'}}className="ui button secondary">Checkout</button>
                         <br></br>
                         <br></br>
                            <div style={{textAlign: 'left', marginLeft: '2vw'}}className="ui relaxed divided list">
                                {this.state.items.map(item => {
                                  return(  <div className="item">
                                        {/* <i class="large github middle aligned icon"></i> */}
                                        <div className="content">
                                          <h3 style={{ color: 'white' }}className="header">{item.product.name}</h3>
                                          <div style={{ color: 'white' }}className="description">${item.product.price}.00</div>
                                        </div>
                                    </div>)
                                })}

                            </div>
                        </div>

                        <div className="four wide column">
                            <div className="shipping-info">
                                <br></br>
                                <h2>Shipping Information</h2>
                                <div className="ui divider"></div>
                                <br></br>
                            </div>
                        </div>
                    </div>




                </div>


            </div>


        )
    }
}