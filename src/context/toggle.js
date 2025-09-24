import { createContext, useState } from "react";

export const ToggleBar = createContext();
export const ToggleWrapper = ({ children }) => {
  let [toggle, setToggle] = useState(false);
  let [cartview, setCartview] = useState(false);
  let [cartItems, setCartItems] = useState([]);
  
   let state = {
    sidebar: [toggle, setToggle],
    cartbar: [cartview, setCartview],
    cartItems,
    addToCart(item) {
      setCartItems([...cartItems, item])
    },
    clearCartItems() {
      setCartItems([])
    }
  };

  
  
  
  return <ToggleBar.Provider value={state}>{children}</ToggleBar.Provider>;
};
