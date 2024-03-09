import React,{ReactNode} from 'react';
import './Slide.css';
//import PropTypes from 'prop-types'; it is not required in case of function component
//we cn use prop library which is a luxuary
//in terminal,type npm i prop-types
type Props={
heading:string,
page?:{
    //question mark means it is optional
    current:number,
    total:number
},
children:ReactNode
};
//function Slide(props:Props){
    //we can destructure props in this way-
    //function Slide({heading,page,children}:Props){
        //if we are using prop library, we do not need to destructure it.
        //sometimes you need to rename the file from tsx to js or js to tsx to remove the errors
        function Slide({heading,children,page}:Props){       
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
Slide.propTypes={
heading:PropTypes.string.isRequired,
page:PropTypes.shape({
current:PropTypes.number.isRequired,
total:PropTypes.number.isRequired
}),
children:PropTypes.node.isRequired
};
export default Slide;