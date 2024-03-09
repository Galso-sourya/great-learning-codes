import React,{Component} from 'react';
import {Row,Col,Form,Button,Toast,ToastContainer} from 'react-bootstrap';
import imageUrls from '../../data/image-sources';
import { addItemToMenu } from '../../services/menu';
import IMenuItem from '../../models/IMenuItem';
type Props={
id:number
};
type State={
    values:{
        name:string,
        price:string,
        description:string,
        imageUrl:string
    },
    errors:{
        name:string[],
        price:string[],
        description:string[],
        imageUrl:string[]
    },
isValid:boolean,
responseState:'initial' | 'success' | 'error',
show:boolean,
toastMessage:string
};
class AddMenuItem extends Component<Props,State>{
state:State={
    values:{
        name:'',
        price:'0',
        description:'',
        imageUrl:''
    },
    errors:{
        name:[],
        price:[],
        description:[],
        imageUrl:[]
    },
isValid:false,
responseState:'initial',
show:false,
toastMessage:''
};
validate(nameOfInput?:keyof State['values']){
    const errors:State['errors']={
        name:[],
        price:[],
        description:[],
        imageUrl:[]    
    };
    let isValid=true;
    if(name.trim()===''){
        errors.name.push('name cannot be empty');
        isValid=false;
    }
    if(description.trim().length<50){
        errors.description.push('at least 50 characters');
        isValid=false;
    }
    if(imageUrl.trim()===''){
        errors.imageUrl.push('can not be empty');
        isValid=false;
    }
    if(price===''){
        errors.price.push('price can not be empty');
        isValid=false;
    }
    const pricePad=/^\d+(\.\d{1,2})?$/;
    if(!pricePat.test(price)){
        errors.price.push('price need to be a valid currency value');
        isValid=false;
    }
    if(nameOfInput){
        this.setState(
            state=>{
                return errors:{
                    ...state.errors,
                    [nameOfInput]:errors[nameOfInput]

                   },
                   isValid
                };
            }
            
        );
        return errors[nameOfInput].length===0;
    }else{
        this.setState(
            {
                errors,
                isValid
            }
        );
        return isValid;
    }
    
}
updateValue=(event:React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>)=>{
const {name,value}=event.target;
this.setState(
    state=>{
        return{
values:{
    ...state.values,
    [name]:value
}
        };
    },
    ()=>{
        this.validate(name as keyof State['values']);
    }
)
}
addItemToMenu=async(event:React.FormEvent<HTMLFormElement>)=>{
event.preventDefault();
if(!this.validate()){
    return;
}
const menuItem={
...this.state.values,
restaurantId:this.props.id,
price:parseFloat(this.state.values.price)
};
try{
    this.setState({
responseState:'initial'
    });
const data=await addItemToMenu(menuItem as IMenuItem);
    this.setState({
        responseState:'success',
        show:true,
        toastMessage:`${data.id}`
            });
}catch(error){
    this.setState({
        responseState:'success',
        show:true,
        toastMessage:error.message
            });  
}
}
render(){
    const {
name,
price,
description,
imageUrl
    }=this.state.values;
    const{
        name:nameErrs,
        price:priceErrs,
        description:descriptionErrs,
        imageUrl:imageUrlErrs
    }=this.state.errors;
    const isValid=this.state.isValid;
    const {responseState,toastMessage,show}=this.state;
    return(
        <>
        <Row>
            <Col xs={12}>
                <h3>add a menu item</h3>
                <hr/>
            </Col>
            <Col xs={12}>
            <Form onSubmit={this.addItemToMenu}>
                <Form.Group
                as={Row}
                controlId="name"
                >
                    <Form.Label column sm={3}>Name</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                        type="text"
                        name="name"
                        value={name}
                        onChange={this.updateValue}
                        aria-describeby="nameHelp"
                        isValid={nameErrs.length!==0}
                        />
                        <Form.Text id="nameHelp" muted>
                            name of the menu item
                        </Form.Text>
                        <Form.Control.Feedback type="invalid">
                            {
                                nameErrs.map(
                                    err=><div key={err}>{err}</div>
                                )
                            }
                        </Form.Control.Feedback>
                    </Col>
                </Form.Group>
                <Form.Group
                as={Row}
                controlId="price"
                >
                    <Form.Label column sm={3}>Price</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                        type="text"
                        name="price"
                        value={price}
                        onChange={this.updateValue}
                        aria-describeby="priceHelp"
                        isValid={priceErrs.length!==0}
                        />
                        <Form.Text id="priceHelp" muted>
                            priceeee
                        </Form.Text>
                        <Form.Control.Feedback type="invalid">
                            {
                                priceErrs.map(
                                    err=><div key={err}>{err}</div>
                                )
                            }
                        </Form.Control.Feedback>
                    </Col>
                </Form.Group>
                <Form.Group
                as={Row}
                controlId="description"
                >
                    <Form.Label column sm={3}>description</Form.Label>
                    <Col sm={9}>
                        <Form.Control
                        as="textarea"
                        name="description"
                        value={description}
                        onChange={this.updateValue}
                        aria-describeby="descriptionHelp"
                        isValid={descriptionErrs.length!==0}
                        />
                        <Form.Text id="descriptionHelp" muted>
                            description should be 50 characters long
                        </Form.Text>
                        <Form.Control.Feedback type="invalid">
                            {
                                descriptionErrs.map(
                                    err=><div key={err}>{err}</div>
                                )
                            }
                        </Form.Control.Feedback>
                    </Col>
                </Form.Group>
                <Form.Group
                as={Row}
                controlId="description"
                >
                   <Col sm={{offset:3,span:9}}>
                    <Button type="submit" disabled={!isValid}>add menu item</Button>
                    </Col> 
                </Form.Group>
            </Form>
            </Col>
        </Row>
        {
        responseState!=='initial' && (
        <ToastContainer
          className="p-3"
          position="top-end"
        >
          <Toast show={show}
          bg={responseState==='success'?'success':"danger"}
          autohide
          delay={5000}
          onClose={()=>this.setState({show:false})}
          >
            <Toast.Header closeButton={false}>
                {responseState==='success'?'Success':'Error'}
            </Toast.Header>
            <Toast.Body>{toastMessage}</Toast.Body>
          </Toast>
        </ToastContainer>)}
        </>
    )
}
}
export default AddMenuItem;