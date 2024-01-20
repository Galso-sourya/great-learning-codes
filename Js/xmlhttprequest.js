//how to fetch data from the backend
const xhr=new XMLHttpRequest();
//Ajax request=asynchronous js and XML
xhr.onload=function(){
    console.log(xhr.responseText);//whatever text is coming from the server
};
//free backend server is there which will fetch fake data
//this is the old way. we can now do it by promise
xhr.open('GET','https://jsonplaceholder.typicode.com/todos/1');
xhr.send();
//copy the whole code in browser and then run. in console. in nodejs it will not work. only
//in browser. 
//how to send data to backend by post? here, in this case, we are fetching data from backend. not sending
//or giving any data to the server.