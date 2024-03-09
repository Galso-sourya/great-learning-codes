import React,{Component,createRef} from 'react';
type Props={};
type State={};
class RefComponent extends Component<Props,State>{
    inputRef=createRef<HTMLInputElement>();//this is an object

    changeHandler=(event:React.ChangeEvent<HTMLInputElement>)=>{//arrow function syntax is must
console.log(this.inputRef.current?.value);//current property is the DOM node. not the inputRef
    }
    submitHandler=(event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();//stop refreshing which is a default property
        this.inputRef.current?.focus();
    }
    
    render(){
        return(
            <form onSubmit={this.submitHandler}>
                <input type="text" ref={this.inputRef}
                onChange={this.changeHandler}
                />
                    <button>submit</button>
                
            </form>
        );
    }
};
export default RefComponent;