import React, { Component } from 'react'


export default class BillingInfo extends Component {

    render() {
        return ( <div>
            <div class="ui warning message">
                <i class="close icon"></i>
                <div class="header">
                    Please do not enter card information
                    </div>
                This website is built for demostration purposes and not for actual transactions
                </div>
            <div className="card-form">
                    
                <form class="ui form">
                    <h4 class="ui dividing header" style={{ color: 'white' }} >Shipping Information</h4>
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
                                    <div class="ten wide field">
                                        <input type="text" name="shipping[address]" placeholder="Street Address"></input>
                                    </div>
                                        <div class="four wide field">
                                            <input type="text" name="shipping[address-2]" placeholder="Apt #"></input>
                                    </div>
                        <div class="two wide field">
                          
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
                            

                    <div class="two fields">
                            <div class="eight wide field">
                                <label style={{ color: 'white' }}>Card Number</label>
                                <input type="text" name="card[number]" maxlength="16" placeholder="Card #"></input>
                            </div>
                            <div class="three wide field">
                                <label style={{ color: 'white' }} >CVC</label>
                                <input type="text" name="card[cvc]" maxlength="3" placeholder="CVC"></input>
                            </div>
                            <div class="six wide field">
                                <label style={{ color: 'white' }} >Expiration</label>
                                <div class="two fields">
                                    <div class="field">
                                        <select class="ui fluid search dropdown" name="card[expire-month]">
                                            <option value="">Month</option>
                                            <option value="1">January</option>
                                            <option value="2">February</option>
                                            <option value="3">March</option>
                                            <option value="4">April</option>
                                            <option value="5">May</option>
                                            <option value="6">June</option>
                                            <option value="7">July</option>
                                            <option value="8">August</option>
                                            <option value="9">September</option>
                                            <option value="10">October</option>
                                            <option value="11">November</option>
                                            <option value="12">December</option>
                                        </select>
                                    </div>
                                    <div class="field">
                                        <input type="text" name="card[expire-year]" maxlength="4" placeholder="Year"></input>
                                    </div>
                                </div>
      
                        </div>
                        </div>

                    </form>        
                </div>
        </div>
        )
    }
}