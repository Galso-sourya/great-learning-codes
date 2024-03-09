import React,{Fragment,Component} from 'react';
import{
    headingFinalStyle,
        headingStyle,
        textCenter,
        listUnstyle,
        bodyStyle
}from './slides.styles';
import './slide.css';
class Slide extends React.Component{
    render(){//essential component
    const slide=(
<div className="slide">
<h1 style={{...headingStyle,...textCenter}}>syling in react</h1>
<hr/>
<div style={bodyStyle}>
<ul style={{...listUnstyle,marginTop:'1em'}}>
<li>a</li>
<li>a</li>
</ul>

</div>

</div>
    );
    return slide;}}
const el=(
<Fragment>
    <Slide></Slide>
    <Slide/>
</Fragment>
);
export default el;