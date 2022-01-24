import React, { useContext } from "react";
import "../sidebarHp.css";
import { ToggleBar } from "../context/toggle";


const Cartsection = () => {
    let state = useContext(ToggleBar);
    let [cartview, setCartview] = state.cartbar;
  
    return (
      <div className={cartview ? "cartbar opencart" : "cartbar"}>
        <div className="cartwdth">
          <div className="flex space-btw pad5 bgblue">
          <img
            className="slogo"
            src="//i5.walmartimages.com/dfw/63fd9f59-43e0/1ed7036a-feba-43ca-8885-1d937a9aa4f2/v1/spark-yellow-spark.b43cc07989a08d84d33b0c87dd8afb1998431e48.svg"
            alt="logo"
          />
          <img
              onClick={() => setCartview(false)}
              className="sclose"
              src="//i5.walmartimages.com/dfw/63fd9f59-43e0/1ed7036a-feba-43ca-8885-1d937a9aa4f2/v1/remove-white.124cb20181e249f5932de870a2d671ca76801665.svg"
              alt="close"
            />
          </div>

          <div className="cart-content">
              
          </div>
        </div>
        
            
     </div>
        
     
  );

  };

  export default Cartsection;