import Menu from "./Menu";
import './App.css';
//each component can be defined either as function or class.
export default function App(){
  return (
  <div className="app"><h1 className="app-title">choose the payment method</h1><Menu/></div>);
}
//export{
//App as default
//} 