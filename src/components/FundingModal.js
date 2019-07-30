import React, { Component } from 'react'
import { Modal, Button, Image, Header } from 'semantic-ui-react'
import { API_ROOT } from '../constants/index'
export default class FundingModal extends Component {

    state = { modalOpen: false, donated: false }

    handleOpen = () => this.setState({ modalOpen: true, donated: false })

    handleClose = () => this.setState({ modalOpen: false })

    getToken = (jwt) => localStorage.getItem('jwt')

    handleSubmit = (ev) => {
        ev.preventDefault();
        let amount = ev.target[0].value
        let token = this.getToken()
        let currentFunding = parseInt(amount) + parseInt(this.props.project.current_funding)
        fetch(`${API_ROOT}/projects/${this.props.project.id}`, {
            method: 'PATCH',
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-type': 'Application/json'
            },
            body: JSON.stringify({current_funding: currentFunding})
        }).then(res => res.json())
        .then(json => this.props.donated(json))
        this.handleClose();
    }

    render() {
        return (
            <Modal trigger={<Button onClick={this.handleOpen}>Fund Us!</Button>}
                open={this.state.modalOpen}
                onClose={this.handleClose}>

                <Modal.Header style={{ backgroundColor: 'gray', color: 'white' }} >Enter the amount below</Modal.Header>
                <Modal.Content style={{ backgroundColor: 'gray', color: 'white' }}>
                    <Modal.Description>
                       <form onSubmit={this.handleSubmit}className="ui form">
                           <label style={{color: 'white'}}>Funding Amount USD</label>
                            <div className = 'field'>
                                <input placeholder="1000"></input>
                            </div>
                       </form>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        )
    }
}