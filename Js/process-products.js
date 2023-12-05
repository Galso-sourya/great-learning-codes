const strProducts=`
[
    {
        "name":"hammer",
        "price":123
    }
]
`;
var products=JSON.parse(strProducts);//it returns equivalent javascript object
console.log(products);
//after that, we can do whatever modification in front end like adding and deleting
var newProduct={
    name:"biscutes",
    price:12
};
products.push(newProduct);
console.log(products);
//now we have to send the data into server. so again we have to convert js to json format
var strProductsSendBack=JSON.stringify(products);//so it will not return a object. it will return a string representing the whole js object
console.log(strProductsSendBack);