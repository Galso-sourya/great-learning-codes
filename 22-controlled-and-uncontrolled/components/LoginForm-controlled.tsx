import React,{Component} from 'react';
type Props={};
type State={
    email:string,
    password:string
};
class LoginForm extends Component<Props,State>{
    //here we do not need ref. instead we have to hold it with state
    state={
        email:'aa',
        password:''//these are the default values what will be shown once we load the page.here state
        //values control the input values. if it changes, it will reflect in inputs.  
    }
    updateValue=(event:React.ChangeEvent<HTMLInputElement>)=>{
        const name=event.target.name;//this will tell what is the input.whether it is email or password
        const value=event.target.value;
        this.setState({
[name]:value
        }as Pick<State,keyof State>);//it means that take the value from the state
    }
    submitHandler=(event:React.FormEvent<HTMLFormElement>)=>{
        event.preventDefault();
        console.log(this.state);
            };
    render(){
        const {email,password}=this.state;
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
                    value={email}//this line controls the value
                    onChange={this.updateValue}
                    />
                    {email}
                </div>
                <div>
                <label htmlFor="password">Password</label>
                <input 
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    onChange={this.updateValue}
                    /> 
                </div>
                <button type="submit">Login</button>
            </form>
        )
    }
}
export default LoginForm;