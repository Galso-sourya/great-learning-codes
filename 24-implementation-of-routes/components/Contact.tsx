import React from 'react';//here child routing will be implemented
//check the official website of react router
import { NavLink,Route,RouteComponentProps } from 'react-router-dom';
import Email from './Email';
type Props={};//props has no property history, but RouteComponentProps has 3 
//properties like history,location and match 
const Contact=({history,location,match}:Props & RouteComponentProps)=>{
    return(
        <>
        <h1>contact</h1>
        <hr/>
        <div>
            contact
            <address>
                frvrvrvrvrvv
            </address>
        </div>

        <div className="navigation-links">
            <NavLink to={`${match.url}/phone`} activeClassName="active" exact>H</NavLink>
            <NavLink to={`${match.url}/email`} activeClassName="active">C</NavLink>
        </div>
<Route path={`${match.path}/phone`} render={()=><div>2333</div>} />
<Route path={`${match.path}/email`} render={(props:RouteComponentProps)=><Email value="frrrr" 
{...props}/>} />
        </>
    );
};
export default Contact;