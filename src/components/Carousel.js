import React, {Component} from 'react'
import ImageSlide from './ImageSlide'
import Arrow from './Arrow'

let imgUrls = ["https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80", "https://wolper.com.au/wp-content/uploads/2017/10/image-placeholder.jpg", "http://oneeyevisionphotography.com/wp-content/uploads/2017/03/One-Eye-Vision-Professional-Editorial-Sports-Food-Product-Photography-commercial-branding-photos-Ahmedabad-Gujarat-India-5.jpg"]

export default class Carousel extends Component {
    constructor (props) {
        super(props);

        this.state = {
            currentImageIndex: 0
        };

        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this);
    }


    nextSlide() {
        const lastIndex = imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentImageIndex + 1;

        this.setState({
            currentImageIndex: index
        });
    }

    previousSlide() {
        const lastIndex = imgUrls.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === 0;
        const index = shouldResetIndex ? lastIndex : currentImageIndex - 1;

        this.setState({
            currentImageIndex: index
        });
    }


  render () {
    return (
      <div className="carousel">
          <div className="image-slider">
            <Arrow
                direction="left"
                clickFunction={this.previousSlide}
                glyph="&#9664;" />

        <ImageSlide url={ imgUrls[this.state.currentImageIndex] } />

            <Arrow
                direction="right"
                clickFunction={this.nextSlide}
                glyph="&#9654;" />
            </div>
      </div>
    );
  }
}
