import React,{Fragment} from 'react';
import{
    headingFinalStyle,
        headingStyle,
        textCenter,
        listUnstyle,
        bodyStyle
}from './slides.styles';
import './slide.css';
//this is a component. it should be a function and the name must start witl capital letter. paste what
//we want to reuse agina nd again
const Slide=()=>{
    const slide=(
<div className="slide">
<h1 style={{...headingStyle,...textCenter}}>syling in react</h1>
<hr/>
<div style={bodyStyle}>
<ul style={{...listUnstyle}}>
<li>a</li>
<li>a</li>
</ul>
</div>
</div>
    );
    return slide;
}
const functionComponent=(
<Fragment>
    <Slide></Slide>
    <Slide/>
</Fragment>
);
export default functionComponent;