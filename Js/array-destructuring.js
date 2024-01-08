const days=[
'a','b','c'
];
//const first=days[0],second=days[1],third=days[2],fourth=days[3];
//console.log(first,fourth);
//purpose of array destructuring is to reduce the labour when we creat many variables for each element of 
//the array
//means breaking down  the array structure
//const [first,second,third,fourth]=days;
//const [first,second,third,,fourth]=days;//to skip one element. to skip 2 elements, we have to give
//2 commas
//console.log(first,fourth);
//if variable goes beyond the last element, it will be given undefined. so we can assign an 
//undefined value
const [first,second,third,,fourth='holiday']=days;
console.log(first,fourth);