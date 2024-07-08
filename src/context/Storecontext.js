import { createContext, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = (props)=>{

    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemID) =>{
        if (!cartItems[itemID]){
            setCartItems(prev=>{
                return {...prev,[itemID]:1}
            }) 
        } else {
            setCartItems(prev=>{
                return {...prev,[itemID]:prev[itemID]+1}
            })
        }
    }

    const removeFromCart = (itemID) =>{
        setCartItems(prev => {
            return {...prev, [itemID]:prev[itemID]-1}
        })
    }

    const getCartTotalAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems){
            if (cartItems[item] > 0){
                let food_info = food_list.find(product => product._id === item);
                totalAmount += food_info.price * cartItems[item] 
            }
        }
        return totalAmount;
    }

    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getCartTotalAmount
    }

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;