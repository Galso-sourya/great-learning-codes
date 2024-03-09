import React,{Component,ChangeEvent,FormEvent} from 'react';
type Props={};
type State={};
class LoginForm extends Component<Props,State>{
    changeHandler=(event:ChangeEvent<HTMLInputElement>)=>{
console.log('you are typing within input-',event.target.name);
console.log('you have entered-',event.target.value);
    }
    submitHandler=(event:FormEvent<HTMLFormElement>)=>{
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