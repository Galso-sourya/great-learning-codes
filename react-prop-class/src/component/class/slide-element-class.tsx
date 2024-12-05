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
{page?.current}/{page?.total}
</div>

</div>
    );
    return slide;}}
const classComponent=(
<Fragment>
<Slide heading='first' page={{current:1,total:2}}>
    <p>this is the children prop</p> 
    </Slide>
<Slide heading='second' page={{current:2,total:2}}>
<p>this is the children prop of the second slide</p> 
</Slide>
</Fragment>
);
export default classComponent;