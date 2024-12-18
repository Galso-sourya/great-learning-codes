import React,{ReactNode,MouseEvent} from 'react';
type Props={
    children:ReactNode//react element does not accept string as child,so react node is better 
    //for this
}
/*this is to show how to use react event in functional component. clickHandler can be declared outside the 
function also*/
const Button=({children}:Props)=>{
    const clickHandler=(event:MouseEvent<HTMLButtonElement>)=>{
        console.log('button click handler');
        console.log(event.target);
        };//there can be performance issue in some cases. we should use hook
    return <button onClick={clickHandler}>{children}</button>;//it will show the text-click me as well
}
export default Button;