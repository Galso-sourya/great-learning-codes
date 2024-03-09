import React,{ReactNode} from 'react';
import './Slide.css';
type Props={
    heading:string,
    page?:{
        current:number,
        total:number
    },
    children:ReactNode,
    showDivider:boolean,
    showTotal:boolean
};
class Slide extends React.Component<Props>{
static defaultProps={
    showDivider:true,
    showTotal:true
};
render(){
    const {heading,page,showDivider,showTotal,children}=this.props;
    let current,total;
    if(page){
        current=page.current;
        total=page.total;
    }
    const slide=(
        <div className="slide">
{
    showTotal?(
        <span className="slide-number">
{current}/{total}
        </span>
    )
}
        </div>
    )
} 
};