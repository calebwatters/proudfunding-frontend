import React, { Component } from 'react'
// import { Dropdown } from 'semantic-ui-react'
// import { Link } from "react-router-dom";
import { Card, Icon, Image } from 'semantic-ui-react'
import { Redirect } from "react-router-dom";


export default class FeaturedProduct extends Component {
    state = {
        clicked: false
    }
    
    componentDidMount() {
        this.setState({
            clicked: false
        })
    }

    handleClick = () => {
        this.setState({
            clicked: true
        })   
    }

    componentWillUnmount() {
        this.setState({
            clicked: false
        })
    }
        
 

    render() {
        if (this.state.clicked === true) {
            return <Redirect to={{
                pathname: '/products/info',
                state: { product: this.props.product }
            }}
            />
          
        }
        return (
 
                <Card onClick={this.handleClick}>
                    <Image src={this.props.product.image1_url} wrapped ui={false} />
                    <Card.Content>
                    <Card.Header><h2>{this.props.product.name}</h2></Card.Header>
                        {/* <Card.Meta>Posted at: {this.props.product.created_at}</Card.Meta> */}
                        <Card.Description>
                        <p>{this.props.product.description.slice(0, 100) + '...'}</p>
                    </Card.Description>
                    </Card.Content>
                    <Card.Content extra>
                        <a>
                            <Icon name='copyright outline' />
                            {this.props.product.project.company_name}
                        </a>
                    </Card.Content>
                </Card>


        )
    }
}