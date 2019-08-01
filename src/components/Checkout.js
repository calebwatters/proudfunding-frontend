import React, { Component } from 'react'
import {Message} from 'semantic-ui-react'


export default class Checkout extends Component {


    render() {
        return (
            <div className="project-show">
                <Message floating
                    onDismiss={this.closeError}
                    header='Coming soon!'
                    content='Still a build in progress'
                />
                <div className="ui grid">

                    <div className="twelve wide column">
                        <br></br>
                        <div className="ui ordered steps">
                            <div className="active step">
                                <div className="content">
                                    <div className="title">Shipping</div>
                                    <div className="description">Choose your shipping options</div>
                                </div>
                            </div>
                            <div className=" step">
                                <div className="content">
                                    <div className="title">Billing</div>
                                    <div className="description">Enter billing information</div>
                                </div>
                            </div>
                            <div className=" step">
                                <div className="content">
                                    <div className="title">Confirm Order</div>
                                    <div className="description">Verify order details</div>
                                </div>
                            </div>
                        </div>
                        <h3>Please Select a Payment Option: </h3>
                        <button className="ui secondary button" style={{marginTop: '15vw'}}>Continue</button>
                    </div>

                    <div className="four wide column">
                        <div className="shipping-info">
                            <br></br>
                            <h2>Shipping Information</h2>
                            <div className="ui divider"></div>
                            <div className="shipping-form">
                                <form className="ui form">

                                    <div className="field">
                                        <label style={{ color: 'white' }} >Name</label>
                                        <div className="two fields">
                                            <div className="field">
                                                <input type="text" name="shipping[first-name]" placeholder="First Name"></input>
                                            </div>
                                            <div className="field">
                                                <input type="text" name="shipping[last-name]" placeholder="Last Name"></input>
                                            </div>
                                        </div>

                                    </div>

                                    <label style={{ color: 'white' }}>Billing Address</label>
                                    <div className="fields">
                                        <div className="twelve wide field">
                                            <input type="text" name="shipping[address]" placeholder="Street Address"></input>
                                        </div>

                                    </div>
                                    <div className="fields">
                                        <div className="ten wide field">
                                            <input type="text" name="shipping[address-2]" placeholder="Apt #"></input>
                                        </div>
                                        <div className="four wide field">

                                            <select className="ui fluid dropdown">
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

        )
    }
}