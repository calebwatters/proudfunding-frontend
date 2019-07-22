import React, {Component} from 'react' 
import UserInfo from '../components/UserInfo'
import BillingInfo from '../components/BillingInfo'
import EmailInfo from '../components/EmailInfo'


export default class UserAccount extends Component {

    state={
        currentPage: 'userInfo'
    }

    handleClick = (ev) => {
        console.log(ev.target.id)
        this.setState({
            currentPage: ev.target.id
        })
    }

    render() {
        const renderPage = () => {
            if(this.state.currentPage === 'userInfo') {
                return <UserInfo user={this.props.user}/>
            } else if (this.state.currentPage ==="emailInfo") {
                return <EmailInfo user={this.props.user} />
            } else if (this.state.currentPage === "billingInfo") {
                return <BillingInfo user={this.props.user}/>
            }
        }
         return (
             <div className="user-account">
             <div className="ui grid">
                 <div className="four wide  column">
                         <div className="ui vertical fluid tabular menu">
                         <a  onClick={this.handleClick} className="item" id="userInfo">
                                 <h3 id="userInfo" ><i id="userInfo" className="user icon"></i>User Information</h3>
                            </a>
                             <a onClick={this.handleClick} className="item" id="billingInfo">
                                 <h3 id="billingInfo" ><i id="billingInfo" className="dollar icon"></i>Billing Information</h3>
                            </a>
                             <a onClick={this.handleClick}  className="item" id="emailInfo">
                                 <h3 id="emailInfo"> <i id="emailInfo" className="mail icon"></i> E-mail Preferences</h3>
                        </a>
                     </div>
                 </div>
                 <div className="twelve wide stretched column">
                     {renderPage()}
                 </div>
             </div>

             </div>
         )
    }
}