import React,{cloneElement,Component,ReactElement} from 'react';
type Props={
    defaultActiveSlide:0,
    children:ReactElement[]
};
type State={
    activeSlide:number
}
class SlideShow extends Component<Props,State>{
    constructor(props:Props){
        super(props);
        this.state={
            activeSlide:this.props.defaultActiveSlide
        } 
    }
   previous=()=>{
    console.log(this);
    this.setState(state=>{
        return{
        activeSlide:Math.max(state.activeSlide-1,0)
        };
    });   
   } 
   next=()=>{
    console.log(this);
    this.setState(state=>{
        return{
        activeSlide:Math.min(state.activeSlide+1,this.props.children.length-1)
        };
    });
   }
   render(){
    const{activeSlide}=this.state;
    const {children}=this.props;
    return (
<>
<div style={{float:'right'}}>
    <button onClick={this.previous}>Previous</button>
    <button onClick={this.next}>Next</button>
</div>
{
cloneElement(
children[activeSlide],{
page:{
    current:activeSlide+1,
    total:children.length
}
}
)
}
</>
    );
   }
}
export default SlideShow;