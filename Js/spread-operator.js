//rest and spread operator are same represented by 3 dots ... but their usage is in different context
//Math.max does not work for array but how to use it? by spread!!!!!!!!!
//spread is used while calling the function while rest is used as argument
const numbers=[10,45,32,78,33,19];
const result=Math.max(...numbers);
console.log(result);
//we can concat 2 arrays by spread in this manner-
const arr1=[1,2,3],arr2=[4,5,6];
const arr3=[...arr1,...arr2];
//object spread
const john={
    name:'John',
    age:32,
    emailids:[
        'john@gmail.com',
        'john@yahoo.com'
    ],
    address:{
        city:'Bangalore',
        pinCode:56010
    }
};
const johnCopy={
    ...john
};//it is not the exact copy. it is not deep copy. this is a shallow copy
//means the variables are copied by value but the arrays will be copied by reference, not by values
//here if we change name, it will not reflect in copy but if we change in email or address, it will be 
//reflected in the copy also.
console.log(johnCopy);
//primitive value change
johnCopy.name='jonathan';
//non primitive value change
johnCopy.emailids.push('rvrvrv');
console.log(john);
console.log(johnCopy);