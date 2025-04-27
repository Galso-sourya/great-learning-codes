import React,{Component} from 'react';
type Item={
    id:number,
    name:string
};
type Props={
    items:Item[]
};
type State={
    filterKey:string,
    filteredItems:Item[]
}
class FruitsList extends Component<Props,State>{
    state={
        filterKey:'',
        filteredItems:this.props.items//initially the whole list will be shown
            };
    render(){
        const {filterKey,filteredItems}=this.state;
        return(
            <>
            <h1>FruitsList component</h1>
            <hr/>
            <ul>
                {
                    filteredItems.map(item=><li key={item.id}>{item.name}</li>)
                }
            </ul>
            </>
        );
    }
};
export default FruitsList;