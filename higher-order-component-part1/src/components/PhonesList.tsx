import React,{Component} from 'react';
type Item={
    id:number,
    name:string,
    platform:string
};
type Props={
    items:Item[],
    title:string
};
class PhonesList extends Component<Props>{
    render(){
        return(
            <>
            <h1>{this.props.title}</h1>
            <hr/>
            <ul>
                {
                    this.props.items.map(item=><li key={item.id}>{item.name}
                    ({item.platform})</li>)
                }
            </ul>
            </>
        );
    }
};
export default PhonesList;