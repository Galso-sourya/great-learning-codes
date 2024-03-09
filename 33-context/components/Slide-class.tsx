import React,{ReactNode} from 'react';
import './Slide.css';
import ThemeContext from '../ThemeContext';
type Props={
    heading:string,
    page?:{
        current:number,
        total:number
    },
    //theme?:'light'|'dark',
    children:ReactNode
    };
class Slide extends React.Component<Props>{
    render(){    
//const {heading,children,page,theme}=this.props;//we have to remove the props
const {heading,children,page}=this.props;
//let current,total;
let current=0,total=0;
if(page){
current=page.current;
total=page.total;
}
    const slide=(
        <ThemeContext.Consumer>
            {
                ({theme})=>(
<div className={`slide slide-${theme}`}>
<span className="slide-number">{page?.current}/{page?.total}</span>
<h2 className="heading-text text-center">{heading}</h2>
<hr/>
<div className="body-text">
{children}
</div>
</div>
                )}
</ThemeContext.Consumer>
    );
    return slide;
}
}