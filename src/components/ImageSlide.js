import React, {Component} from 'react'
import { Redirect } from "react-router-dom";
class ImageSlide extends Component {
    state = {
        clicked: false
    }
     handleClick = () => {
        this.setState({clicked: true})
    }

     styles = {
        maxHeight: '20vw'};
        render() {
            if(this.state.clicked === true) {
                return <Redirect to={{
                    pathname: '/projects/info',
                    state: {
                        project: this.props.project,
                    }
                }}
                />
            }

            if (this.props.project) {
                return (
                    <img onClick={this.handleClick} className="image-slider" style={this.styles} src={this.props.project.image1_url} />
                );
            } else {
                return <div></div>
            }
        }
    
   
}

export default ImageSlide