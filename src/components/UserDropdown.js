import React, {Component} from 'react'
import {Dropdown, Header, Icon} from 'semantic-ui-react'
import { Link } from "react-router-dom";
export default class UserDropdown extends Component {
    
    
    
    
    render() {
        let options = [{ key: 'user', text: 'Cart', icon: 'cart', as: Link, to: '/user/cart' },{ key: 'dashboard', text: 'Dashboard', icon: 'dashboard', as: Link, to: '/user/dashboard' },
            { key: 'cart', text: 'Account Settings', icon: 'settings', as: Link, to: '/user/account' }, { key: 'logout', text: 'Logout', icon: 'sign-in', as: Link, to: '/user/account' }, 
            ]
        return (
            <div className="user-dropdown">
            <Header as='h4'>
                    {this.props.user.image_url ? <img className="ui small circular image" src={this.props.user.image_url} /> : <Icon name='user' />}
                <Header.Content className="user-dropdown-header">
                    {this.props.user.name}
                    <Dropdown
                            className='User Option'
                            floating
                            options={options}
                            trigger={<React.Fragment />}
                    />
                </Header.Content>
                </Header></div>
            )
        
    }
}