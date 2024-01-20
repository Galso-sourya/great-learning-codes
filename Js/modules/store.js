const product =(name,price)=>{//here also we have to write export to remove the issue
//this function will return an object
return{
    name:name,
    price:price
}
};
//you have overwritten the product. so it will throw an error. try it and see what happen if you use var in both
//the cases? because var can be redefined, not const......
//module is nothing but file in js
//how to solve the issue?
//mention module in script tag