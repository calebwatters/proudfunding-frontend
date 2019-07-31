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
            if(this.state.clicked === true && this.props.project.image1_url) {
                return <Redirect to={{
                    pathname: '/projects/info',
                    state: {
                        project: this.props.project,
                        user: this.props.user
                    }
                }}
                />
            } 

            if (this.props.project) {
                if(this.props.project.image1_url) {
                    return (
                        <img onClick={this.handleClick} className="image-slider " style={this.styles} src={this.props.project.image1_url} />
                    );
                } else {
                   return  <img onClick={this.handleClick} className="image-slider" style={this.styles} src={this.props.project} />
                }
         
            } else {
                return <div></div>
            }
        }
    
   
}

export default ImageSlide