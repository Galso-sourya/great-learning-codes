import React,{Component,ChangeEvent,FormEvent} from 'react';
type Props={};
type State={};
class LoginForm extends Component<Props,State>{
    changeHandler=(event:ChangeEvent<HTMLInputElement>)=>{/*as soon as you type something in the form,
        this will be triggered */
console.log('you are typing within input-',event.target.name);
console.log('you have entered-',event.target.value);
    }
    submitHandler=(event:FormEvent<HTMLFormElement>)=>{
        /*what will happen if you do not use arrow function means the below line-
        submitHandler(event:FormEvent<HTMLFormElement>){
        in such a case, this will not be defined
        */
        event.preventDefault();
        console.log('form is submitted');
        console.log(this);
            }
    render(){
        return (
            <form onSubmit={this.submitHandler}>
                <div>
                    <label htmlFor="email">
Email
                    </label>
                    <input 
                    type="email"
                    id="email"
                    name="email"
                    onChange={this.changeHandler}
                    />
                </div>
                <div>
                <label htmlFor="password">Password</label>
                <input 
                    type="password"
                    id="password"
                    name="password"
                    onChange={this.changeHandler}
                    /> 
                </div>
                <button type="submit">Login</button>
            </form>
        )
    }
}
export default LoginForm;