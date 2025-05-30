import React from 'react'
import FruitsList from './components/FruitsListWithFilter';
import PhonesList from './components/PhonesListWithFilter';
const fruits=[
{id:1,name:'Apples'},
{id:2,name:'Oranges'},
{id:3,name:'Bananas'}
];
const phones=[
    {id:1,name:'iPhone 12',platform:'iOS'},
    {id:2,name:'One Plus Nord',platform:'Android'},
    {id:3,name:'iPhone X',platform:'iOS'},
    {id:4,name:'Samsung Galaxy Note 10',platform:'Android'}
];
class App extends React.Component{
    render(){
    return(
        <>
        <FruitsList items={fruits}/>
        <PhonesList items={phones} title="List Of Phones"/>
        </>
        );
    }
    }
    export default App;