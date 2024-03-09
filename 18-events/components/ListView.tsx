import React,{MouseEvent} from 'react';
export type Item={
id:number,
name:string
};
type Props={
    items:Item[]
}
const ListView=({items=[]}:Props)=>{
    const clickHandler=(event:MouseEvent<HTMLLIElement>,item:Item)=>{
console.log(event);
console.log(item);
    }
    return(
        <ul>
            {
                items.map(
                    item=><li key={item.id} onClick={(event)=>clickHandler(event,item)}>{item.name}</li>
                )
            }
        </ul>
    );
};