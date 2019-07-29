import React, { Component } from 'react'
import { Modal, Button, Image, Header } from 'semantic-ui-react'
import { API_ROOT } from '../constants/index'
export default class FundingModal extends Component {

    state = { modalOpen: false }

    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => this.setState({ modalOpen: false })

    getToken = (jwt) => localStorage.getItem('jwt')

    // handleSubmit = (ev) => {
        
    //     fetch(`${API_ROOT}/projects`, {
    //         method: 'PATCH',
    //         headers: {
    //             'Authorization': 'Bearer ' + token,
    //             'Content-type': 'Application/json'
    //         },
    //         body: JSON.stringify({current_funding: })
    //     })
    //     this.handleClose();
    // }

    render() {
        return (
            <Modal trigger={<Button onClick={this.handleOpen}>Fund Us!</Button>}
                open={this.state.modalOpen}
                onClose={this.handleClose}>

                <Modal.Header style={{ backgroundColor: 'gray', color: 'white' }} >Add A Product</Modal.Header>
                <Modal.Content style={{ backgroundColor: 'gray', color: 'white' }}>
                    <Modal.Description>
                       <form className="ui form">
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