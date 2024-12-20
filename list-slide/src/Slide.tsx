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
    showDivider:boolean,
    showTotal:boolean,
    page?:{
current:number,
total:number
    },
    children:ReactNode//it can represent any react component
}
function Slide({heading,showDivider,page,showTotal,children}:Props){
    /*this is for class component. normally the default value is true but we can also set it-----
    static defaultProps={
    showDivider:false
}
    */
   let current,total;
   if(page){
    current=page.current;
    total=page.total;
   }
    const slide=(
<div className="slide">
<h1 style={{...headingStyle,...textCenter}}>{heading}</h1>
{showDivider && <hr/>}
<div style={bodyStyle}>
{children}
{
    showTotal?(
<span>{current}/{total}</span>
    ):(
<span>{current}</span>
    )
}
</div>
</div>
    );
    return slide;
}
Slide.defaultProps={
    showDivider:true,
    showTotal:true
}
export default Slide;