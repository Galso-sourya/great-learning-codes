const sum=(x,y)=>x+y;//they are all global as we can use it in other file
const diff=(x,y)=>x-y;
const product=(x,y)=>x*y;
//export const sum=(x,y)=>x+y;
//export const diff=(x,y)=>x-y;
//export const product=(x,y)=>x*y;
//it is called name export. how to do without name?it is called default export
//you should have only one default export
export default class{//no name, like annonymous function in java
    constructor(real,imaginary){
        this.real=real;
        this.imaginary=imaginary;
    }
    toString(){
        return `${this.real}+${this.imaginary}i`;
    }
}
//instead of individually export, we can alltogether do it like this-
/*export{
    sum,diff,function_name as default
    here function name should be given to target it 
};*/ 