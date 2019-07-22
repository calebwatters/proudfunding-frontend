import React, { Component } from 'react'

export default class UserInfo extends Component {

    render() {
        return (

            <div className="user-account">
                <h2>User Info</h2>
                {this.props.user.image_url ? <div className="profile-image"><img className="ui small circular image" src={this.props.user.image_url} />  </div>:null}
                <h3>{this.props.user.name}</h3>
                <h4>{this.props.user.email}</h4>
                </div>
        )
    }
}