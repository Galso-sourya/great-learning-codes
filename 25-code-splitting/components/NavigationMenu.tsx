import React from 'react';
import {Link,NavLink} from 'react-router-dom';
const NavigationMenu=()=>{
    return(
        <div className="navigation-links">
            <NavLink to="/" activeClassName="active" exact>Home</NavLink>
            <NavLink to="/contact" activeClassName="active">Contact</NavLink>
        </div>
    );
};
export default NavigationMenu;