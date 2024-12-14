import React,{Fragment,Component,ReactNode} from 'react';
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
    page?:{//question mark tells that the object is optional to give
        current:number,
        total:number
    },
    children:ReactNode//it can represent any react component
}
class Slide extends React.Component<Props>{
    render(){//essential component
        const {heading,children,page}=this.props;
    const slide=(
<div className="slide">
<h1 style={{...headingStyle,...textCenter}}>{heading}</h1>
<hr/>
<div style={bodyStyle}>
{children}
</div>
</div>
    );
    return slide;}}
export default Slide;