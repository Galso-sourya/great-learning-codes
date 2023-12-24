/*function greeting(message,name){
    return `${message} ${name}!`;
}
console.log(greeting('good night','john'));
console.log(greeting('good night'));//to avoid this,we can pass some default value if one argument is skipped 
//or not passed*/
function greeting(message,name='world'){
    return `${message} ${name}!`;
}
console.log(greeting('good night','john'));
console.log(greeting('good night'));
//console.log(greeting(undefined,'john'));
