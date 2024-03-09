import React,{Component} from 'react';
type Props={
    throwError:boolean
}
declare function foo():void;
class SampleComponent extends Component<Props>{
    render(){
        const {throwError}=this.props;
        //simulate an error 
        if(throwError){
            foo();//a function which does not exist 
        }
        return (
            <div>
                <h1>sample component</h1>
            </div>
        );
    }
}
export default SampleComponent;