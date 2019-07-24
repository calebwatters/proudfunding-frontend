import React, {Component} from 'react'
import {Modal, Button, Image, Header} from 'semantic-ui-react'
export default class NewProductModal extends Component {

    state = { modalOpen: false }

    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => this.setState({ modalOpen: false })


    render() {
        return (
            <Modal trigger={<Button onClick={this.handleOpen}>Add Product</Button>}
                open={this.state.modalOpen}
                onClose={this.handleClose}>

                <Modal.Header style={{ backgroundColor: 'gray', color: 'white'}} >Add A Product</Modal.Header>
                <Modal.Content style={{ backgroundColor: 'gray', color: 'white' }}>
                    <Modal.Description>
                        <form onSubmit={this.handleSubmit} className="ui form">
                            {/* <h1 style={{ color: 'white' }}>Get Started!</h1> */}
                            <div className="field">
                                <label style={{ color: 'white' }} >Product Name</label>
                                <input type="text" placeholder="Eco Friendly Bedet" />
                            </div>

                            <div className="field">
                                <label style={{ color: 'white' }} >Product Description</label>
                                <textarea rows="3" placeholder="Stuff and things..."></textarea>
                            </div>

                            <div className="field">
                                <label style={{ color: 'white' }} >Product Image Url</label>
                                <input rows="1" placeholder="https://example.com"></input>
                            </div>

                            <div className="field">
                                <label style={{ color: 'white' }} >Product Price ($)</label>
                                <input rows="1" placeholder="10000"></input>
                            </div>
                            <div>
                                <button className="ui button">Create Project</button>
                            </div>

                        </form>
                    </Modal.Description>
                </Modal.Content>
            </Modal>
        )
    }
}