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
//create variables out of the properties of the object
//const name=john.name; instead of this line, we can write-
//const {name,age}=john;
//console.log(name,age);
//we can rename in this way
//const {name,age:yearsOld,city}=john;//here first one is property name and it is assigned to the variable which 
//is the second one.
//console.log(name,age); now this will throw an error
//console.log(name,yearsOld,city);
//const {name,age:yearsOld,address:{city}}=john;
//console.log(name,yearsOld,city);
//const {name,age:yearsOld,address:{city:residence}}=john;
//console.log(name,yearsOld,residence);
//we can also use array destructuring here.combining object destructuring with array destructuring
//const {name,age:yearsOld,address:{city:residence},emailids:[primaryEmailId]}=john;
//console.log(name,yearsOld,residence,primaryEmailId);
const {name,age:yearsOld,address:{city:residence},emailids:[,secondaryEmailId]}=john;
console.log(name,yearsOld,residence,secondaryEmailId);
