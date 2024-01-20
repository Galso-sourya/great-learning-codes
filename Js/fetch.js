//fetch API 
//fetch('https://jsonplaceholder.typicode.com/todos/1')//here 1 is the id. we can have id as 2. no issue
//.then((response)=>response.json())//in this step, we are returning a promise ,then  
//resolved to js object from the json
//format
//.then(value=>console.log(value))
//.catch((error)=>console.log(error.message));
//the default is get here but how to do post request?
//you have to open the above url . not other url to run it in console

//POST data

const newTodo={
    "userId":1,
    "title":"grgrgr",
    "completed":false
};
fetch(
    'https://jsonplaceholder.typicode.com/todos',//first you have to pass the url
    { //second thing to pass
    method:'POST',
    body:JSON.stringify(newTodo) },
    {//third thing to pass.
        headers:{
'Content-Type':'application/json'
        }
    }
)
.then((response)=>response.json())
.then(value=>console.log(value));
