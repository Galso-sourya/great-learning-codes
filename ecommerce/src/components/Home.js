import { ProductsLister } from "./ProductsLister"
import { CartManager } from "./CartManager"
import {Row,Col,Container} from 'react-bootstrap';
import {Header} from './Header';
import sample_products from '../product';
import { useState } from "react";
const Home=()=>{
    const sampleCartModel=()=>{
        const testCartModel={
            cartItemsModel:[
                {
                    product:sample_products[0],
                    quantity:4
                },
                {
                    product:sample_products[1],
                    quantity:3
                },
            ]
        }
        return testCartModel;
    }
    const[cart,setCart]=useState(sampleCartModel());
    const addToCart=(productItem)=>{
        //check if the product is already existing in the cart
        const matchingCartItem=cart.cartItemsModel.find((cartItemModel)=>(
            cartItemModel.product.id===productItem.id
        ))
        if(matchingCartItem){
            const updatedCartItems=cart.cartItemsModel.map((cartItemModel)=>{
                if(cartItemModel.product.id===productItem.id){
                    const updatedCartItem={
                        product:cartItemModel.product,
                        quantity:cartItemModel.quantity+1
                    }
                    return updatedCartItem;
                }else{
                    const newCartItem={
                    product:cartItemModel.product,
                    quantity:cartItemModel.quantity
                    }
                    return newCartItem;
                }
            })
            const updatedCart={
                cartItemsModel:updatedCartItems
            }
            setCart(updatedCart);
        }else{
            const newCartItem={
                product:productItem,
                quantity:1
            }
            const updatedCartItemsModel=[
                ...cart.cartItemsModel,newCartItem
            ]
            const updatedCart={
cartItemModel:updatedCartItemsModel
            }
            //updteCart->4
            setCart(updatedCart);
        }
    }
    const removeFromCart=(productItem)=>{
        const updatedCartItems=[];
        cart.cartItemsModel.forEach((cartItemModel)=>{
            if(cartItemModel.product.id==productItem.id){
                if(cartItemModel.quantity==1){

                }else{
                    const updatedCartItemModel={
                        product:cartItemModel.product,
                        quantity:cartItemModel.quantity-1
                    }
                    updatedCartItems.push(updatedCartItemModel);
                }
            }else{
                updatedCartItems.push(cartItemModel);
            }
        })
        const updatedCart={
            cartItemsModel:updatedCartItems
        }
        setCart(updatedCart);
    }
    return(
        
        <Container>
            <Row>
                <Col lg={12}>
                {<Header></Header>}
                </Col>
            </Row>
         <Row>
            <Col lg={9}>{<ProductsLister addToCart={addToCart}></ProductsLister>}
            </Col>
            <Col lg={3}>{<CartManager cartModel={cart} addToCart={addToCart}
            removeFromCart={removeFromCart}
            ></CartManager>} </Col>
        </Row>   
           
        </Container>
    )
}
export {Home}