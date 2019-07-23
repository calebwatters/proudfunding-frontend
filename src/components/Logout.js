import React from 'react'
import { Redirect } from "react-router-dom";
class Logout extends React.Component{
    componentDidMount() {
        this.props.logout()
    }
    render() {
        return <Redirect path="/" />
    }
}

export default Logout