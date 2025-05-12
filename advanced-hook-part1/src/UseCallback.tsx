import React,{useCallback,memo,useState,useEffect} from 'react';
const box={
    padding:'2em',
    border:'1px solid black'
};
export const UseCallbackParent=()=>{
    const [count,setCount]=useState<number>(0);
    const incrCount=()=>setCount((count:number)=>count+1); //there is issue in this line. to solve it, we 
    //have to change it
    //const incrCount=useCallback(()=>setCount((x:number)=>x+1),[]);
    const [dummyState,setDummyState]=useState<string>('dummy state');
    console.log(dummyState);
    useEffect(()=>{
        setTimeout(()=>{
            setDummyState('dummy state update');
        },5000);
    },[]);
    return(
        <div style={box}>
            state:{dummyState}
            <UseCallbackChild
            count={count}
            incrCount={incrCount}
            />
        </div>
    );
};
type Props={
    count:number,
    incrCount:()=>void
};
export const UseCallbackChild=memo(({count,incrCount}:Props)=>{
    return(
        <>
        <div style={box}>
{count}
<button onClick={incrCount}>+</button>
        </div>
        </>
    )
});