import React,{cloneElement,useState,ReactElement} from "react";
//function component do not have state. for this we have to use react hooks. all hooks start with 
//use. here we will use useState 
type Props={
    children:ReactElement[]
};
const SlideShow=(props:Props)=>{//this is the starting of the function component. it need not start
    //with function always.
    const{children}=props;//we can not use this.props here. as it is function component. not a 
    //class component.this line is not required if we destructure in this way-----
    //const SlideShow=({children}:Props)=>{
    //useState<number>(0)//it is telling the initial value.this returns array of 2 items only. one or the
    //first member of the array is the active set and the 2nd one is the setter function. this 2 values
    //of the array which is being returned, we are storing these 2 in next line.in form of a array. one is
    //the activeSlide and 2nd one in setActiveSlide
const[activeSlide,setActiveSlide]=useState<number>(0)
   const previous=()=>{//function within another function.
    setActiveSlide(activeSlide=>Math.max(activeSlide-1,0))
   }
   const next=()=>{//function within another function.
    setActiveSlide(activeSlide=>Math.min(activeSlide+1,children.length-1))//props.children is not required
    //as we have already destructured in the line below----
    //const{children}=props;
   }
        
        return(
            <>
            <div>
                <button onClick={previous}>prev</button>
                <button onClick={next}>next</button>
            </div>
            {
                cloneElement(
            children[activeSlide]
                )
            }
            </>
        )
    }
export default SlideShow;