import React,{Component,ComponentType} from 'react';

const withFilter=(WrappedComponent:any,itemKey:string)=>{   
    return class WrapperComponent extends Component<any,any>
    {
        state={
            filterKey:'',
            filteredItems:this.props.items//initially the whole list will be shown
                };
                filter=(filterKey:string)=>{
                    this.setState({
            filterKey,
            filteredItems:this.props.items.filter((item:any)=>item[itemKey].toUpperCase()
            .includes(filterKey.toUpperCase()))//substring should match also
                    });
                }
        render(){
            return <WrappedComponent
            {...this.state}
            {...this.props}
            filter={this.filter}
            />;
        }
    }
}
export default withFilter;