import React,{useState,useEffect} from 'react';
import Item from '../models/Item';
import { fetchProductsOfPage } from '../services/products';
type Props={};
type State={
page:number,
status: 'LOADING' | 'LOADED' | 'ERROR',
products:Item[],
error: Error| null
}
const LifecycleDemo=()=>{
    const [page,setPage]=useState<number>(1);//initial value is 1
    const [status,setStatus]=useState<'LOADING' | 'LOADED' | 'ERROR'>('LOADING');
    const [products,setProducts]=useState<Item[]>([]);
    const [error,setError]=useState<Error| null>(null);

    const nextPage=()=>{
        setPage(page=>page+1);
    };

useEffect(()=>{
    const fetchProductsOfPageHelper=async()=>{
        setStatus('LOADING');
const products=await fetchProductsOfPage(page);
setProducts(products);
setStatus('LOADED');
    }
    fetchProductsOfPageHelper();
    return()=>{
        console.log('cleanup function');
    }
    //second argument is if we do not fetch,what will happen.initial render will happen.
    //the second argument should be an array. if it is empty, it will run only after the first render.
    //it may contain the value also like state or a prop or context.
    //if no array, it will run in all cases. similar to life cycle. it will run only after the render
    //this is the filtering criteria

},[page]);//it will run only when the page state changes
//componentWillUnmount(){
//   console.log("hiiiiii"); 
//}
    return(
        <>
        {status==='LOADING' && <div>loading products...</div>}
        {status==='ERROR' && <div>{error?.message}</div>}
        {
        status==='LOADED' && (
            <>
            <button onClick={nextPage}>next page</button>
            <span>you are on page{page}</span>
            <ul>
                {
                    products.map(
                        ({id,name})=><li key={id}>{name}</li>
                    )
                }
            </ul>
            </>
        )
        
        }
        </>
    );
    }
export default LifecycleDemo;