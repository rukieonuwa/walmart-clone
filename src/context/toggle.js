import { createContext, useState } from "react";

export const ToggleBar = createContext();
export const ToggleWrapper = ({ children }) => {
  let [toggle, setToggle] = useState(false);
  let [cartview, setCartview] = useState(false);
  
   let state = {
    sidebar: [toggle, setToggle],
    cartbar: [cartview, setCartview],
   // addcart: [addtocart, setAddtocart]
    
  };

  
  
  
  return <ToggleBar.Provider value={state}>{children}</ToggleBar.Provider>;
};
