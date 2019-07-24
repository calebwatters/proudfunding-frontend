import React, { Component } from 'react'
// import { Dropdown } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import UserDropdown from './UserDropdown'


export default class Checkout extends Component {


    render() {
        return (
            <div className="project-show">
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

        )
    }
}