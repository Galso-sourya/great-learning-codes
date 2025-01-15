import React,{Component} from 'react';//we are importing component as it is a class component
import Item from '../models/Item';//as item is the default export, we should not keep that in braces
import { fetchProductsOfPage } from '../services/products';
type Props={};
type State={
page:number,
status: 'LOADING' | 'LOADED' | 'ERROR',
products:Item[],
error: Error| null//either error object or null
}
class LifecycleDemo extends Component<Props,State>{
    constructor(props:Props){
        //console.log('constructor');
        super(props);
        this.state={//this is the initial point of the state
            page:1,
            status:'LOADING',
            products:[],
            error:null
                };
    }
    nextPage=()=>{
        this.setState(
            state=>{
                return{
page:state.page+1
                };
            }
        );
    }
render(){
    const {page,status,products,error}=this.state;//destructuring step
    return(
        <>
        {status==='LOADING' && <div>loading products...</div>}
        {status==='ERROR' && <div>{error?.message}</div>}
        {
        status==='LOADED' && (
            <>
            <button onClick={this.nextPage}>next page</button>
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
    )
    async fetchProductsOfPage(){
        this.setState({
            status:'LOADING'
        });
        try{
const products=await fetchProductsOfPage(this.state.page);
this.setState({
status:'LOADED',
products//after loaded, the products will remain same. that is the meaning of this line. it is equal 
//to the initial value 
});
}catch(error){
    this.setState({
        status:'ERROR',
        error
        });
}
    }
    componentDidMount(){
this.fetchProductsOfPage();
    }
    componentDidUpdate(oldProps:Props,oldState:State){
        if(oldState.page!==this.state.page){//we do not run the function all the time, only when 
            //the page state changes
this.fetchProductsOfPage();}
    }
}    
componentWillUnmount(){//for the cleaning up process
    
}
export default LifecycleDemo;
