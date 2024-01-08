class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    celebrateBirthday(){
        this.age++;
    }
    }
/*class Employee extends Person{
}
const john=new Employee('john',32);
console.log(john);*/

class Employee extends Person{
    constructor(name,age,role,dept){
        super(name,age);//it is calling superclass constructor
        this.role=role;
this.dept=dept;
    }
    celebrateBirthday(){
        console.log('happy');
        //super.celebrateBirthday();//here we are calling the super function also
    }
    }
    const john=new Employee('john',32,'web developer','it');
    console.log(john);
john.celebrateBirthday();
