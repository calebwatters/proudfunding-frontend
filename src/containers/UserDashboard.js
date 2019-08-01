import React, {Component} from 'react'
import { API_ROOT } from '../constants/index';
import ProjectCard from '../components/ProjectCard'

export default class UserDashboard extends Component {
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
                     .then(json => {
                       let userProjects = json.filter(
                         project =>
                           project.user.id === this.props.user.id
                       );
                       this.setState({
                         projects: userProjects
                       });
                     });
                   window.scrollTo(0, 0);
                 }
                 render() {
                   return (
                     <div className="ui grid">
                       <div className="four wide column">
                         <div className="ui vertical fluid tabular menu">
                           <h2 style={{ color: "white" }}>
                             Your Projects:{" "}
                           </h2>
                           <br />
                         </div>
                       </div>
                       <div className="twelve wide stretched column">
                         <h3 style={{ color: "white" }}>
                           Total Funds Raised: $
                           {this.state.projects.length === 0
                             ? 0
                             : 10000}
                           .00{" "}
                         </h3>
                         <div className="dashboard-stats">
                           <progress
                             className="progress"
                             max="100"
                             value="0"
                           />
                         </div>
                         <div className="ui divider" />
                         {this.state.projects.length === 0 ? (
                           <h3 style={{ color: "white" }}>
                             No projects created
                           </h3>
                         ) : null}

                         <div className="dashboard-projects">
                           <div className="projects-container">
                             {this.state.projects.map(
                               project => {
                                 return (
                                   <ProjectCard
                                     user={this.props.user}
                                     project={project}
                                   />
                                 );
                               }
                             )}
                           </div>
                         </div>
                       </div>
                     </div>
                   );
                 }
               }