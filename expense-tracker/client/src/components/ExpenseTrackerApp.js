import { useEffect, useState } from "react"
import { getAllExpenseItems } from "../services/service"
import {ExpenseItemsLister} from "./ExpenseItemsLister"
import {Container} from "react-bootstrap"
import { ExpenseCreator } from "./ExpenseCreator"
import { ExpenseSummary } from "./ExpenseSummary"
const ExpenseTrackerApp=()=>{
    const [expenseItems,setExpenseItems]=useState([]);
    //write down the useEffect hook
useEffect(()=>{
    const getAllExpenseItemsInvoker=async()=>{
        const response=await getAllExpenseItems();
        console.log(JSON.stringify(response))
        setExpenseItems(response);
    }
    getAllExpenseItemsInvoker();
},[])
    //write a new method within the useEffect
    //within the new method impl,call the service method
    //print the result
    return(
        <Container>
            <h2>Expense Items</h2>
            <ExpenseCreator expenseItems={expenseItems}></ExpenseCreator><hr/>
            <ExpenseItemsLister expenseItems={expenseItems}></ExpenseItemsLister>
            <ExpenseSummary expenseItems={expenseItems}></ExpenseSummary>
        </Container>
    )
}
export {ExpenseTrackerApp}