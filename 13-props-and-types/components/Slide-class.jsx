import React,{ReactNode} from 'react';
import PropTypes from 'prop-types';
import './Slide.css';
/*type Props={
    heading:string,
    page?:{
        //question mark means it is optional
        current:number,
        total:number
    },
    children:ReactNode
    };*/
    //how to do with proptype definition in class also.
class Slide extends React.Component{
    propTypes={
        heading:PropTypes.string.isRequired,
        page:PropTypes.shape({
        current:PropTypes.number.isRequired,
        total:PropTypes.number.isRequired
        }),
        children:PropTypes.node.isRequired
        };
    render(){    
const {heading,children,page}=this.props;
    const slide=(
<div className="slide">
<span className="slide-number">{page?.current}/{page?.total}</span>
<h1 className="heading-text text-center">{heading}</h1>
<hr/>
<div className="body-text">
{children}
</div>
</div>
    );
    return slide;
}
}