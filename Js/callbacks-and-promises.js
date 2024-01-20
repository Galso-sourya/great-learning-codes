//callback functions have disadvantage. to remove it, we need promises
/*const sum=(x,y)=>{
    return x+y;
}
console.log(sum(10,20));*/

/*const sum=(x,y)=>{
    setTimeout(()=>{
        return x+y;
    },2000);
};
console.log(sum(10,20));*/

//this is the callback function
/*const sum=(x,y,cb)=>{
    setTimeout(()=>{
        cb(x+y);
    },2000);
    return;
};
function printResult(result){
    console.log(result);
}
console.log(sum(10,20,printResult));*/
//but what are the drawbacks?? lets see now
//another alternative

/*const sum=(x,y,cb)=>{
    setTimeout(()=>{
        cb(x+y);
    },2000);
    return;
};
console.log(sum(10,20,function(result){
    console.log(result);
}));*/

/*const sum=(x,y,cb)=>{
    setTimeout(()=>{
        cb(x+y);
    },2000);
    return;
};
console.log(sum(10,20,function(result){
    console.log(result);
    sum(result,30,function(result){
        console.log(result);
    })
}));*/

//this is called christmas tree problem. what if we need to add more numbers. not just 3? it will keep
//going and going inside furthur and the code will be more complicated
//now lets see how to refactor the problem using promises
//Promise is a class. type Promise in the browser.

const sum=(x,y)=>{
    const promise=new Promise((resolve,reject)=>{
        //reject is to throw an error
        if(typeof x!=='number' || typeof y!=='number'){
            return reject(new Error('both arguments must be a number'));
        }
        setTimeout(()=>{
            resolve(x+y);
        },2000);
    });
    return promise;
};
//const promise=sum(10,20);
//promise.then((result)=>console.log(result));
/*const promise=sum(10,'hello');
promise
.then((result)=>console.log(result))
.catch(error=>console.log(error.message));*/
const promise=sum(10,20);
/*promise
.then((result)=>{
console.log(result);
return 100;
})*/
promise
.then((result)=>{
console.log(result);
return sum(result,30);//here we are returning another promise
})
.then((value)=>console.log(value))//do not write here ; sign. this sign.
.catch(error=>console.log(error.message));
