import React,{MouseEvent} from 'react';
export type Item={
id:number,
name:string
};
type Props={
    items:Item[]
}
const ListView=({items=[]}:Props)=>{
    const clickHandler=(event:MouseEvent<HTMLLIElement>)=>{/*click on the any item of the list
        and the function will be triggered */
console.log(event);
    }
    return(
        <ul>
            {
                items.map(
                    item=><li key={item.id} onClick={(event)=>clickHandler(event)}>{item.name}</li>
                )
            }
        </ul>
    );
};
export default ListView;