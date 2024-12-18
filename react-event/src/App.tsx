import React from 'react';
import Button from './Button';
import LoginForm from './LoginForm';
import ListView,{Item} from './ListView';
const items:Item[]=[//this is an array of items
    {
id:1,
name:'iPhone 12'
    },
    {
        id:2,
        name:'iPhone 1'
            },
            {
                id:3,
                name:'iPhone 2'
                    }
];
const spacer={
margin:'4em'
};
const clickHandler=(event:React.MouseEvent<HTMLButtonElement>)=>{//it passes an event.synthetic one. not real. so mention the type
    // by : sign. you can use union function here |
console.log('button click handler');
console.log(event.target);
};
function App() {

    return (  
    <>
    <div style={spacer}>
<h2>button</h2>
<button onClick={clickHandler}>click me</button>
    </div>

    <div style={spacer}>
<h2>button(function component)</h2>
<button>click me as well</button>
    </div>
    
    <div style={spacer}>
<h2>LoginForm(class component)</h2>
<LoginForm/>
    </div>
    <div style={spacer}>
<h2>ListView(passing arguments to event handler)</h2>
<ListView items={items}/>
    </div>
    </>
)
}
export default App;