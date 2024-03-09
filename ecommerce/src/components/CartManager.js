import { CartItems } from './CartItems';
import { CartPricing } from './CartPricing';
const CartManager=({cartModel,addToCart,removeFromCart})=>{
    return(
        <div style={{backgroundColor:'red'}}>
            <h2>Cart Items</h2>
            <hr/>
            <CartItems cartModel={cartModel} addToCart={addToCart} removeFromCart={removeFromCart}>

            </CartItems>
            {/*CartItemsComponent */}
            {/*PricingComponent */}
            <CartPricing cartModel={cartModel}></CartPricing>
            {/* CheckoutComponent*/}
        </div>
    )
}
export {CartManager}