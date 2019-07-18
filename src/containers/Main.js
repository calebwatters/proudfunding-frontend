import React, { Component } from 'react'
import Header from '../components/Header'
import Carousel from '../components/Carousel'
import FeaturedProducts from '../components/FeaturedProducts'

export default class Main extends Component {



    render() {
        return (
                <div>
                    <Header />
                    <Carousel />
                    <FeaturedProducts />
                </div>
        )
    }
}