import React, { useContext } from "react";
import "../sidebarHp.css";
import { ToggleBar } from "../context/toggle";
import { getImageUrl } from "./utils";


const Cartsection = () => {
    let state = useContext(ToggleBar);
    let [cartview, setCartview] = state.cartbar;
    let { cartItems } = state;
  
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
            <h3 className="pad5">Shopping Cart</h3>
            <p className="pad5">Items in your cart</p>
            <div className="cart-items">
              {cartItems.length === 0 ? (
                <p className="pad5">Your cart is empty</p>
              ) : (
                cartItems.map((item, index) => (
                  <div key={index} className="cart-item flex space-btw pad5">
                    <div className="cart-item-info">
                      <p>{item.title}</p>
                      <p>${item.priceMin.toFixed(2)}</p>
                    </div>
                    <div className="cart-item-img">
                      <img src={getImageUrl(item.imagePath)} alt={item.title} />
                    </div>
                  </div>
                ))
              )}
            </div>
              
          </div>
        </div>
        
            
     </div>
        
     
  );

  };

  export default Cartsection;