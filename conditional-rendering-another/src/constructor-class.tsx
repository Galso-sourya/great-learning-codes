import React,{cloneElement,Component,ReactElement} from 'react';
/*type Props={
    children:ReactElement[]//it should be an array
};*/
type Props={
    initialActiveSlide:0,
    children:ReactElement[]//it should be an array
};
type State={
    activeSlide:number
}
class SlideShow extends Component<Props,State>{
    /*state={
        activeSlide:0
    }; without this piece of code, it will still work. just the state is not made. that's it.*/
    
    constructor(props:Props){
        super(props);//this is the default constructor. this.props=props;
        this.state={
            activeSlide:this.props.initialActiveSlide
        } 
    }
    
   /*previous(){
    console.log(this);
   }*/
   previous=()=>{
    console.log(this);
    /* this.setState({//this should contain which needs to be changed
        activeSlide:this.state.activeSlide-1
    }) if current state depends on another state, we should not write like this. instead we have to 
    use a function */
    this.setState(state=>{
        return{
        activeSlide:Math.max(state.activeSlide-1,0)//but the value should not go below 0
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
    const{activeSlide}=this.state;//destructuring step
    const {children}=this.props;
    return (
<>
<div style={{float:'right'}}>
    <button onClick={this.previous}>Previous</button>
    <button onClick={this.next}>Next</button>
</div>
{
cloneElement(//first argument is a element and the second one is any extra prop
children[activeSlide],
{
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