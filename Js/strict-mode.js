/*function foo(){
    var x=1;
}
console.log(x);this will throw an error as x is local to the function. not global*/
//what if we do not write var? it will become global!!!!!!!!!!!it is allowed in js
/*function foo(){
    x=1;
}
foo();
console.log(x);*/
//strict mode of execution to avoid errors
//how to enable it?it will not allow to declare any variable without var keyword
/*"use strict";globally it will work
function foo(){
    x=1;
}
foo();
console.log(x);*/
//but what if we need to to function for a particular function?
function foo(){
    "use strict";   
    x=1;
}
foo();
console.log(x);