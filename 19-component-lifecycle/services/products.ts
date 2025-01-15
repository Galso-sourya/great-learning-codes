import Item from '../models/Item';
const products={
    1:[//this will be shown in page number 1
        {id:1,name:'a'},
        {id:2,name:'b'},
        {id:3,name:'c'}
    ],
    2:[
        {id:4,name:'d'},
        {id:5,name:'e'},
        {id:6,name:'f'}
    ]
};
const fetchProductsOfPage=(page:number)=>{//this accepts the page number and according to it,it shows the item.if page number exceeds 2
    //it will throw an error. the reject statement of the promise
    if(page==1||page==2){
        return new Promise<Item[]>((resolve,reject)=>{
            setTimeout(()=>{
                resolve(products[page]);
            },2000);
        });
    }else{//error if page number exceeds 2
        return new Promise<Item[]>((resolve,reject)=>{
            setTimeout(()=>{
                reject(new Error('no product'));
            },2000);
        });    
    }
}
export{
    fetchProductsOfPage
};
