import React,{Fragment,ReactNode} from 'react';
import{
    headingFinalStyle,
        headingStyle,
        textCenter,
        listUnstyle,
        bodyStyle
}from './slides.styles';
import './slide.css';
type Props={
    heading:string,
    children:ReactNode//it can represent any react component
}
function Slide({heading,children}:Props){
    const slide=(
<div className="slide">
<h1 style={{...headingStyle,...textCenter}}>{heading}</h1>
<hr/>
<div style={bodyStyle}>
{children}
</div>
</div>
    );
    return slide;
}
export default Slide;