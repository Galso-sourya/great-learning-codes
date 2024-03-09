import React,{Component} from 'react';
import Dialog from './Dialog';
type Props={};
type State={
    isDialogToBeShown:boolean
};
class TermsAndConditions extends Component<Props,State>{
    state={
isDialogToBeShown:false
    };
    showDialog=()=>{
        this.setState({
            isDialogToBeShown:true       
        });
    }
    hideDialog=()=>{
        this.setState({
            isDialogToBeShown:false      
        });   
    }
    render(){
        return(
            <section id="terms-and-conditions">
                <p>
                    fefeferfefefefe
                </p>
                <p>
                    aaaaaaaaa
                </p>
                <p>
                    for terms and conditions, clic here
                    <button onClick={this.showDialog}>review terms</button>
                </p>
                {
                    this.state.isDialogToBeShown?(
                        <Dialog heading="terms and conditions">
                            <p>hi</p>
                            <p>second</p>
                            <div>third
<div className="text-center">
    <button onClick={this.hideDialog}>cancel</button>
    <button onClick={this.hideDialog}>ok</button>
</div>
                            </div>
                        </Dialog>
                    ):null
                }
            </section>
        );
    }
}
export default TermsAndConditions;