//file extension should not be tsx . it will be jsx
import React,{Fragment,Component,ReactNode} from 'react';
import PropTypes from 'prop-types';
import{
    headingFinalStyle,
        headingStyle,
        textCenter,
        listUnstyle,
        bodyStyle
}from './slides.styles';
import './slide.css';
class Slide extends React.Component{
    propTypes={
        heading:PropTypes.string.isRequired,
        page:PropTypes.shape({
    current:PropTypes.number.isRequired,
    total:PropTypes.number.isRequired
        }),
        children:PropTypes.node.isRequired
    };
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