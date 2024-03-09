import React,{useContext,ReactNode} from 'react';
import ThemeContext from '../ThemeContext';
import './Slide.css';
type Props={
heading:string,
page?:{
    current:number,
    total:number
},
children:ReactNode
};
        function Slide({heading,children,...restOfProps}:Props){ 
            const {theme}=useContext(ThemeContext); 
            let current,total;
            if(restOfProps.page){
                current=restOfProps.page.current;
                total=restOfProps.page.total;
            }     
    const slide=(
<div className={`slide slide-${theme}`}>
<span className="slide-number">{current}/{total}</span>
<h1 className="heading-text text-center">{heading}</h1>
<hr/>
<div className="body-text">
</div>
</div>
    );
    return slide;
}
Slide.defaultProps={
heading:PropTypes.string.isRequired,
page:PropTypes.shape({
current:PropTypes.number.isRequired,
total:PropTypes.number.isRequired
}),
children:PropTypes.node.isRequired
};
export default Slide;