import { useDispatch, useSelector } from "react-redux";
import ItemCards from "./ItemCards";
import { clearCart } from "../utils/cartSlice";



const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);

    console.log(cartItems);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <div className="m-4 p-4 text-center">
            <h1 className="text-2xl font-bold">Cart</h1>
            <button className="m-2 px-2 py-1 bg-gray-500 text-white rounded cursor-pointer"
            onClick={handleClearCart}
            >Clear Cart</button>
            <div className="w-6/12 bg-gray-100 my-4 mx-auto p-4 shadow-lg">
                <div className="m-2"><ItemCards items = {cartItems}/></div>
            </div>
        </div>
    );
};

export default Cart;