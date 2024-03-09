import React,{useState,cloneElement,ReactElement} from 'react';
//state object is not present in function component
//react hooks are there. how to recognize?
type Props={
    children:ReactElement[]//it should be an array
};
const SlideShow =({children}:Props)=>{
    const [activeSlide,setActiveSlide]=useState<number>(0);//2nd argument is a setter
   const previous=()=>{
    console.log(this);
    /* this.setState({//this should contain which needs to be changed
        activeSlide:this.state.activeSlide-1
    }) if current state depends on another state, we should not write like this. instead we have to 
    use a function */
    setActiveSlide(activeSlide=>Math.max(activeSlide-1,0));   
   } 
   const next=()=>{
    setActiveSlide(activeSlide=>Math.min(activeSlide+1,children.length-1));   
   }
    return (
<>
<div style={{float:'right'}}>
    <button onClick={previous}>Previous</button>
    <button onClick={next}>Next</button>
</div>
{
cloneElement(//first argument is a element and the second one is any extra prop
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
export default SlideShow;