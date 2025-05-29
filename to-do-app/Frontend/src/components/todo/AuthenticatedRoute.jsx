import React, { Component } from 'react'
import { Navigate } from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'

class AuthenticatedRoute extends Component {
	render() {
		if (AuthenticationService.isUserLoggedIn()) {
			//here the children is the welcome component
			return {...this.props.children}
		} else {
			//if user is not logged in, it will redirect. 
			return <Navigate to="/login" />
		} 
	}
}

export default AuthenticatedRoute 