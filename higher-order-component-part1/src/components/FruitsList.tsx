import React,{Component} from 'react';
type Item={
    id:number,
    name:string
};
type Props={
    items:Item[]
};
class FruitsList extends Component<Props>{
    render(){
        return(
            <>
            <h1>FruitsList component</h1>
            <hr/>
            <ul>
                {
                    this.props.items.map(item=><li key={item.id}>{item.name}</li>)
                }
            </ul>
            </>
        );
    }
};
export default FruitsList;