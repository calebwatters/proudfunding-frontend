import React, { Component } from 'react'
// import { Dropdown } from 'semantic-ui-react'
// import { Link } from "react-router-dom";
import { Card, Icon, Image } from 'semantic-ui-react'


export default class FeaturedProduct extends Component {


    render() {
        return (
 
                <Card>
                    <Image src='https://wolper.com.au/wp-content/uploads/2017/10/image-placeholder.jpg' wrapped ui={false} />
                    <Card.Content>
                        <Card.Header>{this.props.product.name}</Card.Header>
                        <Card.Meta>Posted at: {this.props.product.created_at}</Card.Meta>
                        <Card.Description>
                            {this.props.product.description}
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