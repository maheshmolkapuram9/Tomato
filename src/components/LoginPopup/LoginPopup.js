import { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

const LoginPopup = ({setShowLogin}) => {
    const [currentState, setCurrentState] = useState("Login");

    return ( 
        <div className="login-popup">
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currentState}</h2>
                    <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="cross icon" />
                </div>
                <div className="login-popup-inputs">
                    {currentState==="Sign Up" && 
                    <input type="text" placeholder="your name" required/> 
                    }
                    <input type="email" placeholder="your email" required />
                    <input type="password" placeholder="your password" required />
                </div>
                <button>{currentState==="Sign Up" ? "Create account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, i agree to the terms of use & privacy policy</p>
                </div>
                {currentState==="Sign Up" ? 
                <p>Already have an account <span onClick={()=>setCurrentState("Login")}>Login here</span></p> : 
                <p>Create a new account? <span onClick={()=>setCurrentState("Sign Up")}>click here</span></p>
                }
            </form>
        </div>
     );
}
 
export default LoginPopup;