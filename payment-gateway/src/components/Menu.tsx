import './Menu.css';
import PaymentOptions from '../models/PaymentOptions';
import CreditDebitCard from './CreditDebitCard';
import { useState } from 'react';
import NetBanking from './NetBanking';
import UPI from './UPI';
//declaration of array
const paymentOptions=[PaymentOptions.DebitCreditCard,PaymentOptions.NetBanking,PaymentOptions.UPI];
//sfc from react food truck
const Menu=()=>{
    let [option,setOption]=useState(paymentOptions[0]);//initial value of useState is passed
    const onClick=(item:PaymentOptions,id:number)=>{
//option=item;
//set sets the new option
setOption(item);
    }
    return(
<div className="menu">
    <div className="payment-options">
    {
    paymentOptions.map(
        
        //(item)=>{
        //if(item===option){
//return <button className="payment-option payment-option-selected" key={item}>{item}</button>;}
//else{
    //return <button className="payment-option" key={item}>{item}</button>   
//}
    //}
//or
    
    (item,idx)=>(//to write in multiple lines, we use brackets. otherwise we have to write in a single
        //line
    <button 
    className={`payment-option ${option===item?'payment-option-selected':''}`} 
    key={item}
    onClick={()=>onClick(item,idx)}//wrap up function
    >{item}</button>
)
    )
        }
    {/*<button className="payment-option">1</button>
<button className="payment-option">2</button>
<button className="payment-option">3</button></div>*/}</div>
<div className="payment-details">
    {option===paymentOptions[0]&&<CreditDebitCard/>}
    {option===paymentOptions[1]&&<NetBanking/>}
    {option===paymentOptions[2]&&<UPI/>}
    </div>
    </div>
    );
}
export default Menu;