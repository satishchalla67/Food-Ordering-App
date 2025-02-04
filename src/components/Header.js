import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {

    // let loginBtn = "Login";

    const [loginBtn, setLoginBtn] = useState("Login");

    const {LoggedInUser} = useContext(userContext);

    const onlineStatus = useOnlineStatus();

    //Subscribing to the store using selector

    const cartItems = useSelector((store) => store.cart.items);

    return (
        <div className="flex justify-between bg-yellow-100">
            <div className="w-36">
            <img className="logo" 
            src={LOGO_URL} alt="logo-image"/>
            </div>
            <div className="flex items-center text-gray-700 font-medium">
                <ul className="flex m-4 p-4">
                    <li className="m-1 p-1">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
                    <li className="m-1 p-1"><Link to="/">Home</Link></li>
                    <li className="m-1 p-1"><Link to="/about">About Us</Link></li>
                    <li className="m-1 p-1"><Link to="/contact-us">Contact Us</Link></li>
                    <li className="m-1 p-1"><Link to="/grocery">Grocery</Link></li>
                    <li className="m-1 p-1 font-bold cursor-pointer"><Link to="/cart">🛒({cartItems.length} items)</Link></li>
                    <button className="m-1 p-1 cursor-pointer" onClick={()=> {
                        if(loginBtn=="Login"){
                            setLoginBtn("Logout");
                        }
                        else{
                            setLoginBtn("Login");
                        }
                    }}>{loginBtn}</button>
                    <li className="m-1 p-1 font-bold">{LoggedInUser}</li>
                </ul>
            </div>
        </div>
    )
};

export default Header;