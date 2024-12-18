import React,{Component,createRef} from 'react';
//how to set a default value for a state in this case-uncontrolled component
type Props={};
type State={};
class LoginForm extends Component<Props,State>{
    emailRef=createRef<HTMLInputElement>();
    passwordRef=createRef<HTMLInputElement>();
    submitHandler=(event:React.FormEvent<HTMLFormElement>)=>{
event.preventDefault();
console.log({
email:this.emailRef.current?.value,
password:this.passwordRef.current?.value
});
    };
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
                    ref={this.emailRef}
                    defaultValue="hi"
                    />
                </div>
                <div>
                <label htmlFor="password">Password</label>
                <input 
                    type="password"
                    id="password"
                    name="password"
                    ref={this.passwordRef}
                    /> 
                </div>
                <button type="submit">Login</button>
            </form>
        )
    }
}
export default LoginForm;