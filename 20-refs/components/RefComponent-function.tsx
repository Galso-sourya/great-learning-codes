import React,{useRef} from 'react';//useRef is a hook
type Props={};
const RefComponent=(props:Props)=>{
const inputRef=useRef<HTMLInputElement>(null);//the initial value should be passed. here it is null
    const changeHandler=(event:React.ChangeEvent<HTMLInputElement>)=>{//arrow function syntax is must
        console.log(inputRef.current?.value);//current property is the DOM node. not the inputRef
            }
            const submitHandler=(event:React.FormEvent<HTMLFormElement>)=>{
                event.preventDefault();//stop refreshing which is a default property
                inputRef.current?.focus();
            }

    return(
        <form onSubmit={submitHandler}>
            <input type="text" ref={inputRef}
            onChange={changeHandler}
            />
            <button>submit</button>
        </form>
    );
};
export default RefComponent;