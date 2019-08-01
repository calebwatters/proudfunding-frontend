import React, { Component } from 'react'
import {Redirect} from 'react-router-dom'
import { API_ROOT } from '../constants/index'
export default class UserCart extends Component {

    state = {
        checkout: false, 
        items: []
    }

    getToken(jwt) {
                   return localStorage.getItem("jwt");
                 }

    componentDidMount() {
        let token = this.getToken();
        fetch(`${API_ROOT}/cart_items`, {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json"
          }
        })
          .then(res => res.json())
          .then(json =>
            this.setState({
              items: json
            })
          );


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
                                <div className="shipping-form">
                                <form class="ui form">
            
                                    <div class="field">
                                        <label style={{ color: 'white' }} >Name</label>
                                        <div class="two fields">
                                            <div class="field">
                                                <input type="text" name="shipping[first-name]" placeholder="First Name"></input>
                                            </div>
                                            <div class="field">
                                                <input type="text" name="shipping[last-name]" placeholder="Last Name"></input>
                                            </div>
                                        </div>

                                    </div>

                                    <label style={{ color: 'white' }}>Billing Address</label>
                                    <div class="fields">
                                        <div class="twelve wide field">
                                            <input type="text" name="shipping[address]" placeholder="Street Address"></input>
                                        </div>
                                       
                                        </div>
                                        <div className="fields">
                                        <div class="ten wide field">
                                            <input type="text" name="shipping[address-2]" placeholder="Apt #"></input>
                                        </div>
                                        <div class="four wide field">

                                            <select class="ui fluid dropdown">
                                                <option value="">State</option>
                                                <option value="AL">Alabama</option>
                                                <option value="AK">Alaska</option>
                                                <option value="AZ">Arizona</option>
                                                <option value="AR">Arkansas</option>
                                                <option value="CA">California</option>
                                                <option value="CO">Colorado</option>
                                                <option value="CT">Connecticut</option>
                                                <option value="DE">Delaware</option>
                                                <option value="DC">District Of Columbia</option>
                                                <option value="FL">Florida</option>
                                                <option value="GA">Georgia</option>
                                                <option value="HI">Hawaii</option>
                                                <option value="ID">Idaho</option>
                                                <option value="IL">Illinois</option>
                                                <option value="IN">Indiana</option>
                                                <option value="IA">Iowa</option>
                                                <option value="KS">Kansas</option>
                                                <option value="KY">Kentucky</option>
                                                <option value="LA">Louisiana</option>
                                                <option value="ME">Maine</option>
                                                <option value="MD">Maryland</option>
                                                <option value="MA">Massachusetts</option>
                                                <option value="MI">Michigan</option>
                                                <option value="MN">Minnesota</option>
                                                <option value="MS">Mississippi</option>
                                                <option value="MO">Missouri</option>
                                                <option value="MT">Montana</option>
                                                <option value="NE">Nebraska</option>
                                                <option value="NV">Nevada</option>
                                                <option value="NH">New Hampshire</option>
                                                <option value="NJ">New Jersey</option>
                                                <option value="NM">New Mexico</option>
                                                <option value="NY">New York</option>
                                                <option value="NC">North Carolina</option>
                                                <option value="ND">North Dakota</option>
                                                <option value="OH">Ohio</option>
                                                <option value="OK">Oklahoma</option>
                                                <option value="OR">Oregon</option>
                                                <option value="PA">Pennsylvania</option>
                                                <option value="RI">Rhode Island</option>
                                                <option value="SC">South Carolina</option>
                                                <option value="SD">South Dakota</option>
                                                <option value="TN">Tennessee</option>
                                                <option value="TX">Texas</option>
                                                <option value="UT">Utah</option>
                                                <option value="VT">Vermont</option>
                                                <option value="VA">Virginia</option>
                                                <option value="WA">Washington</option>
                                                <option value="WV">West Virginia</option>
                                                <option value="WI">Wisconsin</option>
                                                <option value="WY">Wyoming</option>
                                            </select>
                                        </div>


                                    </div>
                                    </form>
                                </div>
                                <br></br>
                            </div>
                        </div>
                    </div>




                </div>


            </div>


        )
    }
}