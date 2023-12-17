import { useSelector, useDispatch } from "react-redux";
import RestaurantItem from "../components/ResturantItem.js";
import {clearCart} from "../Store/Slice/cartSlice.js";
const Cart= () =>{
    const cartItems = useSelector((state)=> state?.cart?.cartItems)
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
      };
    return(
        <div className="resto-item-container">
            {cartItems?.length === 0 && <h3>Cart is empty!! Add items to cart :)</h3>}
            {cartItems?.length >0 && <button style={{"margin":"auto", "padding" : "5px","borderRadius" : "10px"}} onClick={handleClearCart}>Clear Cart</button>}
            <RestaurantItem itemCards={cartItems} />
        </div>
    )
}
export default Cart;