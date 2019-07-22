import React, { Component } from 'react'
import Header from '../components/Header'
import Carousel from '../components/Carousel'
import FeaturedProducts from '../components/FeaturedProducts'

export default class Main extends Component {

    state = {
        imageUrls: ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80", "https://wolper.com.au/wp-content/uploads/2017/10/image-placeholder.jpg", "http://oneeyevisionphotography.com/wp-content/uploads/2017/03/One-Eye-Vision-Professional-Editorial-Sports-Food-Product-Photography-commercial-branding-photos-Ahmedabad-Gujarat-India-5.jpg"]
    }

    render() {
        return (
                <div>
                    <Carousel imgUrls={this.state.imageUrls}/>
                    <FeaturedProducts />
                </div>
        )
    }
}