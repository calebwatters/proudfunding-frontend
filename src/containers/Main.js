import React, { Component } from 'react'
import Header from '../components/Header'
import Carousel from '../components/Carousel'
import FeaturedProducts from '../components/FeaturedProducts'
import {API_ROOT} from '../constants/index'
import {Dimmer, Loader} from 'semantic-ui-react'

export default class Main extends Component {
                 state = {
                   projects: []
                 };

                 getToken(jwt) {
                   return localStorage.getItem("jwt");
                 }

                 componentDidMount() {
                   let token = this.getToken();
                   fetch(`${API_ROOT}/projects`, {
                     headers: {
                       Authorization: "Bearer " + token
                     }
                   })
                     .then(res => res.json())
                     .then(json =>
                       this.setState({
                         projects: json
                       })
                     );
                 }

                 render() {
                   return (
                     <div>
                       {this.state.projects.length === 0 ? (
                         <div className="no-results">
                           <Dimmer active inverted>
                             <Loader content="Loading" />
                           </Dimmer>
                         </div>
                       ) : null}
                       <div className="carousel">
                         <h2>Projects of the Week!</h2>
                         <Carousel
                           user={this.props.user}
                           projects={this.state.projects.slice(
                             0,
                             3
                           )}
                         />
                       </div>
                       <FeaturedProducts />
                     </div>
                   );
                 }
               }