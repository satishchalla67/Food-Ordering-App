import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {

    // let loginBtn = "Login";

    const [loginBtn, setLoginBtn] = useState("Login");

    return (
        <div className="header">
            <div className="logo-conatiner">
            <img className="logo" 
            src={LOGO_URL} alt="logo-image"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login-btn" onClick={()=> {
                        if(loginBtn=="Login"){
                            setLoginBtn("Logout");
                        }
                        else{
                            setLoginBtn("Login");
                        }
                    }}>{loginBtn}</button>
                </ul>
            </div>
        </div>
    )
};

export default Header;