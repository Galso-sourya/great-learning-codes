//instead of fetch, we can use this as alternative to make the big code simple
//here we do not need to use then a nd catch like in previous case
//we have to use a function
const fetchAndAddTodos=async()=>{
    try{
    //this is the function
   const response= await fetch('https://jsonplaceholder.typicode.com/todos/1');//this line will suspend the function
    //until the promise is resolved but the other part will work
    //this will not work in microsoft edge. working fine in google crome
//await can not be used in a normal function. it should be async
const todo=await response.json();//this will resolve the promise. so now it can go to the next line
console.log(todo);}catch(error){
console.log(error.message);//we can disconnect with internet and see the error message
}
};
fetchAndAddTodos();