import React, {Component} from 'react'

import { Link } from 'react-router-dom'

import AuthenticationService from './AuthenticationService.js'
//this tells that whether user is loged in or not

class HeaderComponent extends Component {
    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        //console.log(isUserLoggedIn);

        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark"> 
                    {/*this is the left side. only one condition. it is blank when user is not logged
                    in and it will show todos when the user is logged in*/}
                    <ul className="navbar-nav">
                        {isUserLoggedIn && (
                        //this will be shown only when the user is logged in 
                        <li><Link className="nav-link" to="/todos">Todos</Link></li>
                        )}
                    </ul>
                    {/*this is the right side */}
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default HeaderComponent