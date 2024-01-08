/*class Person{

}
const john=new Person();
console.log(john);*/

/*class Person{
constructor(){
    console.log(this);
}
}
const john=new Person();
console.log(john);*/

class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    celebrateBirthday(){
        this.age++;
    }
    }
    const john=new Person('john',32);
    console.log(john);
//what is prototype
john.celebrateBirthday();
console.log(john);
