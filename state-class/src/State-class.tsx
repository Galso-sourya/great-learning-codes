import React,{cloneElement,Component,ReactElement} from "react";//clone element is essential to import
//because we can not change the children as it is from prop and prop is immutable. so we have to make
//a copy of the prop.
type Props={
    children:ReactElement[]//here the [] is compulsory for array. as we are passing more than 1 slide
};
type State={
    activeSlide:number
};
class SlideShow extends Component<Props,State>{
    state={
        activeSlide:0
    };
    /*the below 6 lines are ways to use state by declaring constructor. default. but the above 3 lines are
    the shortcut*/
    constructor(props:Props){
        super(props)
        this.state={
            activeSlide:0
        }
    }
    /*previous(){
        console.log('previous')
        console.log(this)//here the context will be undefined which is a problem. so we do not use this.
    }
        insead of the above 4 lines, we use the below arrow notations.
        previous=()=>{
            console.log('prev button clicked');
            console.log(this);
        }
    next=()=>{
        console.log('next')
    }*/
   previous=()=>{
    this.setState(state=>{
        return{
            activeSlide:Math.max(state.activeSlide-1,0)//here math function is being called because
            //the slide number should not go below 0
        }
    })
   }
   next=()=>{
    this.setState(state=>{
        return{
            activeSlide:Math.min(state.activeSlide+1,this.props.children.length-1)//here the math function
            //is being called because the slide should not go beyond the number of total slide present.
            //here also ,the index starts from 0. so the number of slides will be less than 1 of that of
            //the total length
        }
    })
   }
    render(){
        const{activeSlide}=this.state;//active slide to be shown in the page is coming from the state.
        //not from the prop. because state is mutable but prop is immutable.
        const{children}=this.props;//children is the part of the prop. not the state.
        return(
            <>
            <div>
                <button onClick={this.previous}>prev</button>
                <button onClick={this.next}>next</button>
            </div>
            {
                cloneElement(
            children[activeSlide],
            {
                page:{//there is error in this line but behind the error, you can see the display. close
                    //the error dialog box.
                    current:activeSlide+1,
                    total:children.length
                }
            }
                )
            }
            </>
        )
    }
}
export default SlideShow;