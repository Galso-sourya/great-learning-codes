//in three different situations, we can use the rest oerator
//1. when declaring function's arguments

/*function sort(x,y,...others){
    console.log(x);
    console.log(y);
    console.log(others);
}
sort(14,78,45,10,67);*/

function foo(x,y,...others){
    console.log(x);
    console.log(y);
    console.log(others);
}
function sort(...numbers){
    console.log(numbers);
    return numbers.sort();
}
const result=sort(14,78,45,10,67);
console.log(result);

//2. when array destructuring

const days=[
    'a',
    'b',
    'c',
    'd',
    'e'
];
const [first,second,...restOfDays]=days;
console.log(first,second,restOfDays);

//3. while object destructuring
