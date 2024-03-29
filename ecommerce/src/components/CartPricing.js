import {Row,Col} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
const CartPricing=({cartModel})=>{
    const calculateItemsPrice=()=>{
let itemsPrice=0;
cartModel.cartItemsModel.forEach((cartItemModel)=>{
    itemsPrice=itemsPrice+(cartItemModel.product.price*cartItemModel.quantity)
})
return itemsPrice;
    }
    const calculateTaxPrice=()=>{
    return (calculateItemsPrice()*10)/100    
    }
    const calculateShippingPrice=()=>{
       return 500; 
    }
    const calculateTotalPrice=()=>{
     return calculateItemsPrice()+calculateTaxPrice()+calculateShippingPrice();   
    }


    return(
        <>
        <Row>
<Col>Items Price</Col>
<Col>{calculateItemsPrice()}</Col></Row>
<Row>
<Col>Tax Price</Col>
<Col>{calculateTaxPrice()}</Col></Row>
<Row>
<Col>Shipping Price</Col>
<Col>{calculateShippingPrice()}</Col></Row>
<Row><hr/>
<Col>Total Price</Col>
<Col>{calculateTotalPrice()}</Col></Row>
<Row>
<Col><Button variant="warning">checkout</Button></Col>
        </Row>
        </>
    )
}
export {CartPricing}