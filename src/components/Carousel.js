import React, {Component} from 'react'
import ImageSlide from './ImageSlide'


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
                <div onClick={this.previousSlide}className="left-arrow-icon">
                    <div className="right-arrow"></div>
                </div>

        <ImageSlide user={this.props.user} project={ this.props.projects[this.state.currentImageIndex] } />

                <div onClick={this.nextSlide} className="right-arrow-icon">
                    <div className="left-arrow"></div>
                </div>
            </div>
      </div>
    );
  }
}
