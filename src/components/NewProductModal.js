import React, {Component} from 'react'
import {Modal, Button, Image, Header} from 'semantic-ui-react'
import {API_ROOT} from '../constants/index'
export default class NewProductModal extends Component {

    state = { modalOpen: false }

    handleOpen = () => this.setState({ modalOpen: true })

    handleClose = () => this.setState({ modalOpen: false })
    
    getToken = (jwt) => localStorage.getItem('jwt')

    handleSubmit = (ev) => {
        ev.preventDefault();
        let token = this.getToken();
        let name = ev.target[0].value;
        let description = ev.target[1].value;
        let imgUrl = ev.target[2].value;
        let price = ev.target[3].value;
        fetch(`${API_ROOT}/products`, {
            method: 'POST', 
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-type': 'Application/json'
            }, 
            body: JSON.stringify({name: name, description: description, image1_url: imgUrl, price: price, project_id: this.props.project.id})
        })
        this.handleClose();
    }

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
                                <input type="text" placeholder="Eco Friendly Bidet" />
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