import React, { Component } from 'react'
import NewProduct from '../components/NewProductModal'
import NewProductModal from '../components/NewProductModal';
import ProjectProduct from '../components/ProjectProduct'
import FundingModal from '../components/FundingModal'
export default class ProjectInfo extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
        
    }

    render() {
        let props = { project: this.props.location.state.project }
        return (
            <div>
                <div className="project-show">
                    <div className="ui grid">
                        <div className="four wide column">
                            <div className="project-products">
                                <br></br>
                                <h2>Linked Products</h2>
                                <div className="ui divider"></div>
                                <br></br>
                                <ul>
                                {props.project.products.map(product => {
                                    return <ProjectProduct product={product}/>
                                })}
                                </ul>
                                {props.project.user.id === this.props.location.state.user.id ? <div><br></br><NewProductModal project={props.project}/> </div> : null}
                                <div>
                                    <details>
                                        <p>{props.project.description}</p>
                                    </details>
                                </div>
                            </div>

                    
                        </div>

                        <div className="twelve wide column">
                            <div className="project-info">
                            <h1>{props.project.title}</h1>
                            <div className="ui divider"></div>
                            <img className="ui rounded image project-info-image" src={props.project.image1_url} />
                            <h2>Funding Goal: ${props.project.funding_goal}.00</h2>
                            <progress value={props.project.current_funding} max={ props.project.funding_goal}> </progress>
                            <br></br>
                            <br></br>
                            <FundingModal />
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