import React,{ReactNode} from 'react';
import './Slide.css';
type Props={
    heading:string,
    page?:{
        current:number,
        total:number
    },
    showDivider:boolean,
    showTotal:boolean,
    children:ReactNode
    };
class Slide extends React.Component<Props>{
    static defaultProps={
        showDivider:true,
        showTotal:true
    };
    render(){    
const {heading,children,page,showDivider,showTotal}=this.props;
let current,total;
if(page){
    current=page.current;
    total=page.total;
}
/*let dividerEl=null;
if(showDivider){
    dividerEl=<hr/>;
}*/
    const slide=(
<div className="slide">{//2 alternatives in braces
showTotal?(//if the condition is true
<span className="slide-number">{current}/{total}</span>):(//if the condition is false
<span className="slide-number">{current}</span>)}
<h1 className="heading-text text-center">{heading}</h1>
{showDivider && <hr/>}
<div className="body-text">
{children}
</div>{null}
</div>
    );
    return slide;
}
}
/*how to give default prop in functional component?
Slide.defaultProps={

}
*/
export default Slide;