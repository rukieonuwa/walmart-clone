import React, { useContext } from "react";

import Grid1 from "../assets/images/homepage_img/k2-_9c66a916-9209-4d38-9ca8-66a02f3c7f87.v1.jpg";
import Grid2 from "../assets/images/homepage_img/k2-_7c012544-6e3d-4e4d-a9d7-148bd7eae274.v1.jpg";
import Grid3 from "../assets/images/homepage_img/k2-_3da2c2c1-d5ab-42db-83e1-940ad0446743.v1.jpg";
import Grid4 from "../assets/images/homepage_img/d648e0fc-25d4-4759-9b6e-fa1ec4c878fc.68d21b1a366df62b8d1e48d7a515467d.webp";
import Grid5 from "../assets/images/homepage_img/6b71d05c-23e3-4f3a-9eff-09002563086b_1.ef47bb922f9a53465ed49326cc8e6936.jpeg";
import Grid6 from "../assets/images/homepage_img/048f43da-9da0-43fd-b499-4a8dc18a40c1.2c7fcb7a2a36197aa60bf40e29d57af3.jpeg";
import Grid7 from "../assets/images/homepage_img/05da93cc-eaf7-479e-b7dc-8edae6f65aca.48a84e0b65c0935bbce8c4c90cf6c0f2.jpeg";
import { ToggleBar } from "../context/toggle";
import { getImageUrl } from "./utils";


const gridProducts = [
  {
    img: Grid4,
    imagePath: "/homepage_img/d648e0fc-25d4-4759-9b6e-fa1ec4c878fc.68d21b1a366df62b8d1e48d7a515467d.webp",
    title: "Johnson's Head-To-Toe Tearless Gentle",
    subtitle: "Baby Wash and Shampoo",
    priceMin: 3.92,
    priceMax: 19.90,
    delivery: "2-day delivery",
    button: "Choose options"
  },
  {
    img: Grid5,
    imagePath: "/homepage_img/6b71d05c-23e3-4f3a-9eff-09002563086b_1.ef47bb922f9a53465ed49326cc8e6936.jpeg",
    title: "Dove Nutritive Solutions Shampoo with Pump",
    subtitle: "Intensive Repair, 31 oz",
    priceMin: 6.98,
    priceMax: 6.98,
    delivery: "2-day delivery",
    button: "Add to cart"
  },
  {
    img: Grid6,
    imagePath: "/homepage_img/048f43da-9da0-43fd-b499-4a8dc18a40c1.2c7fcb7a2a36197aa60bf40e29d57af3.jpeg",
    title: "Dove Advanced Care Dry Spray Antipespirant",
    subtitle: "Deodorant Powder Soft 3.8 oz",
    priceMin: 6.18,
    priceMax: 6.18,
    delivery: "2-day delivery",
    button: "Choose options"
  },
  {
    img: Grid7,
    imagePath: "/homepage_img/05da93cc-eaf7-479e-b7dc-8edae6f65aca.48a84e0b65c0935bbce8c4c90cf6c0f2.jpeg",
    title: "Degree Men Antipespirant Deodorant Stick Cool v2",
    subtitle: "Rush 2.7 oz (Twin Pk)",
    priceMin: 4.47,
    priceMax: 4.47,
    delivery: "2-day delivery",
    button: "Add to cart"
  }
];

const GridBanner = () => {
    const { addToCart } = useContext(ToggleBar);

   return(
        <div>
           <div className="gridbanner">
               <div className="grid1">
                   <div className="grid1-title">
                       <h4>Pickup and delivery</h4>
                   </div>
                   <div className="grid1-content">
                       <div className="grid-img">
                           <img src={Grid1} alt="" />
                       </div>
                       <h4>Groceries and even more</h4>
                       <p>1919 Davis St, San Leonardo</p>
                       <button>Start your order</button>
                   </div>
               </div>
               <div className="grid2">
               <div className="grid2-title">
                       <h4>Earn 5% cash back</h4>
                   </div>
                   <div className="grid2-content">
                       <div className="grid-img">
                           <img src={Grid2} alt="" />
                       </div>
                       <h4>Earn 5% cash back</h4>
                       <p>Everyday on Walmart.com</p>
                       <button>Learn how</button>
                   </div>
               </div>
               <div className="grid3">
                   <div className="grid3-title">
                       <h4>No order minimum shopping</h4>
                   </div>
                   <div className="grid3-content">
                       <div className="grid-img">
                           <img src={Grid3} alt="" />
                       </div>
                       <h4>For Walmart+ members</h4>
                       <p>Start your free trial today. Restrictions apply.</p>
                       <button>Try it free</button>
                   </div>
               </div>
            </div>

            <div className="section4">
                 <p className="shoppingExperience">Continue your shopping experience</p>
                 <div className="sec4Products">
                   {gridProducts.map((item, idx) => {
                     const priceDisplay = item.priceMin === item.priceMax
                       ? `$${item.priceMin.toFixed(2)}`
                       : `$${item.priceMin.toFixed(2)}-$${item.priceMax.toFixed(2)}`;
                     const isAddToCart = item.button === "Add to cart";
                     return (
                       <div className={`product${idx + 1}`} key={idx}>
                         <div>
                           <img src={getImageUrl(item.imagePath)} alt="" />
                         </div>
                         <p>{item.title}</p>
                         <p>{item.subtitle}</p>
                         <h4>{priceDisplay}</h4>
                         <p>{item.delivery}</p>
                         <button onClick={() => isAddToCart && addToCart(item)}>
                           {item.button}
                         </button>
                       </div>
                     );
                   })}
                 </div>
                 <div className="dots">
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                    <span class="dot"></span>
                 </div>
            </div>

        </div>
       );
};

export default GridBanner;