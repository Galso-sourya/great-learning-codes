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
            filter=(filterKey:string)=>{
                this.setState({
        filterKey,
        filteredItems:this.props.items.filter(item=>item['name'].toUpperCase()
        .includes(filterKey.toUpperCase()))//substring should match also.if we remove the touppercase, we 
        //have to type exactly. including uppercase. now if we type banana, it can find Banana
                });
            }
    render(){
        const {filterKey,filteredItems}=this.state;
        return(
            <>
            <h1>FruitsList component</h1>
            <hr/>
            <input
            type="search"
            placeholder="search by name"
            value={filterKey}
            onChange={(event)=>this.filter(event.target.value)}
            />
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