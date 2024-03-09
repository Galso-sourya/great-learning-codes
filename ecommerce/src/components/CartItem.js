import {Row,Col} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
const CartItem=({CartItemModel,addToCart,removeFromCart})=>{
    return(
        <Row>
            <Col>{CartItemModel.product.name}</Col>
            <Col xs={2}>
            <Button variant="primary"
            onClick={
                ()=>{
                    removeFromCart(CartItemModel.product);
                }
            }
            >-</Button>
            </Col>
            <Col xs={2}>
            <Button variant="primary" onClick={
                ()=>{
                    addToCart(CartItemModel.product)
                }
            }>+</Button>
            </Col>
            <Col>
            {CartItemModel.quantity}*{CartItemModel.product.price}
            </Col>

        </Row>
    )
}
export {CartItem}