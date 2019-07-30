import React, { Component } from 'react'
import NewProduct from '../components/NewProductModal'
import NewProductModal from '../components/NewProductModal';
import ProjectProduct from '../components/ProjectProduct'
import FundingModal from '../components/FundingModal'
import {Message} from 'semantic-ui-react'
export default class ProjectInfo extends Component {

    state={
        project: this.props.location.state.project, 
        invalidUser: false
    }
    componentDidMount() {
        window.scrollTo(0, 0)  
    }

    donated = (project) => {
        this.setState({
            project: project
        })
        alert("Thank you for the donation!");
    }

    handleNonRegistered = () => {
        this.setState( {
            invalidUser: true
        })
    }

    closeError = () => {
        this.setState({
            invalidUser: false
        })
    }

    render() {
       
        return (
             <div>
                <div className="project-show">
                    {this.state.invalidUser ? <Message floating
                        onDismiss={this.closeError}
                        header='You must register before you can do that!'
                        content='Visit our login page, then try again'
                    /> : null}
                    <div className="ui grid">
                        <div className="four wide column">
                            <div className="project-products">
                                <br></br>
                                <h2>Linked Products</h2>
                                <div className="ui divider"></div>
                                <br></br>
                                <ul>
                                {this.state.project.products.map(product => {
                                    return <ProjectProduct product={product}/>
                                })}
                                </ul>
                                {this.state.project.user.id === this.props.location.state.user.id ? <div><br></br><NewProductModal project={this.state.project}/> </div> : null}
                                <div>
                                    <details>
                                        <p>{this.state.project.description}</p>
                                    </details>
                                </div>
                            </div>

                    
                        </div>

                        <div className="twelve wide column">
                            <div className="project-info">
                            <h1>{this.state.project.title}</h1>
                            <div className="ui divider"></div>
                            <img className="ui rounded image project-info-image" src={this.state.project.image1_url} />
                            <h2>Funding Goal: ${this.state.project.funding_goal}.00</h2>
                            <br></br>
                            <h2>Amount Raised: ${this.state.project.current_funding}</h2>
                            <progress value={this.state.project.current_funding} max={ this.state.project.funding_goal}> </progress>
                            <br></br>
                            <br></br>
                                {this.props.location.state.user !== '' ?
                                 <FundingModal donated={this.donated} user={this.props.location.state.user} project={this.state.project} />: 
                                 <button onClick={this.handleNonRegistered}className="ui button">Fund us!</button>}
                                
                                
                            <br></br>
                                <br></br>
                            </div>
                           
                        </div>
                        </div>


                    

                    </div>


                </div>
            
            
        )
    }
}