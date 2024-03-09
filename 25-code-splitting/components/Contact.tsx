import React,{lazy,Suspense} from 'react';
import { NavLink,Route,RouteComponentProps } from 'react-router-dom';
import Email from './Email';
const  ContactForm=lazy(()=>import( './ContactForm'));//to create a separate bundle for it
type Props={};
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
            <NavLink to={`${match.url}/message`} activeClassName="active">r</NavLink>
        </div>
<Route path={`${match.path}/phone`} render={()=><div>2333</div>} />
<Route path={`${match.path}/email`} render={(props:RouteComponentProps)=><Email value="frrrr" 
{...props}/>} />
<Suspense fallback={<div>loading.....</div>}>
<Route path={`${match.path}/message`} render={(props:RouteComponentProps)=><ContactForm 
{...props}/>} />
</Suspense>

        </>
    );
};
export default Contact;