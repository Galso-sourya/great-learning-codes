//in object, there is not a particular sequence of key value pair but in map, it is there.
//in map, we can have a function also as a key which is not possible in case of object
//Map is a class available
const numbers=new Map([[1,"one"],[2,"two"],[3,"three"]]);
console.log(numbers.size);
console.log(numbers.entries());
console.log(numbers.keys());
console.log(numbers.values());
numbers.set(40,'Forty');
console.log(numbers);
console.log(numbers.get(3));
numbers.delete(2);
console.log(numbers);
//numbers.clear();
//how to destructure?
for(let[key,value] of numbers){
    console.log(`${key}=${value}`);
}