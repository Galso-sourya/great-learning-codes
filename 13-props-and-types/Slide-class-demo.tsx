import React from 'react';
import Slide from './components/Slide-class';
import './Slide-demo.css';
//<> is the shortcut for <React.Fragment>
//entire ul is the children prop
const el=(
    <>
    <Slide heading="how do you styles in react" page={{current:1,total:2}}>
    <ul className="list-unstyled" style={{marginTop:'1.5em'}}><li>a</li><li>b</li></ul>
    
    </Slide>
    <Slide heading="how to do study" page={{current:2,total:2}}>
    <p>ffffffffffffffff</p>
    </Slide>
    </>
);
export default el;