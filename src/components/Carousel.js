import React, {Component} from 'react'
import ImageSlide from './ImageSlide'
import Arrow from './Arrow'

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
        const lastIndex = this.props.projects.length - 1;
        const { currentImageIndex } = this.state;
        const shouldResetIndex = currentImageIndex === lastIndex;
        const index = shouldResetIndex ? 0 : currentImageIndex + 1;

        this.setState({
            currentImageIndex: index
        });
    }

    previousSlide() {
        const lastIndex = this.props.projects.length - 1;
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
          <h2>Projects of the Week!</h2>
          <div className="image-slider">
            {/* <Arrow
                direction="left"
                clickFunction={this.previousSlide}
                glyph="&#9664;" /> */}
                <div onClick={this.previousSlide}class="left-arrow-icon">
                    <div class="right-arrow"></div>
                </div>

        <ImageSlide project={ this.props.projects[this.state.currentImageIndex] } />

                <div onClick={this.nextSlide} class="right-arrow-icon">
                    <div class="left-arrow"></div>
                </div>

            {/* <Arrow
                direction="right"
                clickFunction={this.nextSlide}
                glyph="&#9654;" /> */}
            </div>
      </div>
    );
  }
}
