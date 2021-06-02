import React, {useState} from "react";
import Facebook from "../assets/images/svg/facebook-black.d13f639544589db78277d117f5704b0a0d781f1d.svg";
import Twitter from "../assets/images/svg/twitter-black.91cab03a3fbfbd130942fec69fd32f7b8519aea4.svg";
import Pinterest from "../assets/images/svg/pinterest-black.fedb13d191e0003054024935a17eae3195cc11d5.svg";
import Youtube from "../assets/images/svg/youtube-black.fca0061e713e3e82326a122cce50da962bfd2a55.svg";
import Instagram from "../assets/images/svg/instagram-black.442e2d8b82bad8c69e2cc9b8565e3d5eeb637443.svg";
import Brand1 from "../assets/images/footer_img/k2-_7930f70e-22b1-4c50-80bc-b42dc319942f.v1.png";
import Brand2 from "../assets/images/footer_img/k2-_4574dd20-75f7-45a4-985e-71aebc538d89.v1.png";
import Brand3 from "../assets/images/footer_img/k2-_64866d8d-0868-4119-b83d-aaf3db27123d.v1.png";
import Brand4 from "../assets/images/footer_img/k2-_7b792639-8061-4afd-99b3-955131fb6ef2.v1.png";
import Brand5 from "../assets/images/footer_img/k2-_0c213844-7e96-455a-a73c-d74166c84bf5.v1.webp";
import Brand6 from "../assets/images/footer_img/k2-_77e28f57-cc7e-44f7-9b72-3583c1a7647e.v1.png";
import Brand7 from "../assets/images/footer_img/k2-_a4e24a8e-b455-428b-9518-d66d4df485e0.v1.webp";
import Brand8 from "../assets/images/footer_img/k2-_a63e8e8d-aa01-48a2-bb04-896e154551ed.v1.webp";
import Brand9 from "../assets/images/footer_img/k2-_e90901d4-1916-4ec6-9424-5c59a8a242b5.v1.png";
import Brand10 from "../assets/images/footer_img/k2-_a2499865-3f18-41a1-8aaa-7976522f3347.v1.png";


const Footer = () => {

     let [email, setEmail]= useState("");
   return(
       <div>
           <div className="signup">
                <div className="signup-form">
                    <input  
                    type="text"
                    placeholder="Enter email for weekly newsletter"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}/>
                    <button>Sign up</button>
                </div>
                <div className="socials">
                    <img src={Facebook} alt=""/>
                    <img src={Twitter} alt=""/>
                    <img src={Pinterest} alt=""/>
                    <img src={Youtube} alt=""/>
                    <img src={Instagram} alt=""/>      
                </div>
           </div>
           <div className="aboutWalmart">
               <ul>
                   <li className="lihead">Walmart Services</li>
                   <li>Walmart+</li>
                   <li>Grocery Pickup and Delivery</li>
                   <li>MoneyCenter</li>
                   <li>Walmart Credit Card</li>
                   <li>Walmart Pay</li>
                   <li>Weekly Ad</li>
                   <li>Other Services</li>
               </ul>
               <ul>
                   <li className="lihead">Get to Know Us</li>
                   <li>Our Company</li>
                   <li>Store Directory</li>
                   <li>Digital Museum</li>
                   <li>Our Suppliers</li>
                   <li>Sell on Walmart.com</li>
                   <li>Advertise With Us</li>
                   <li>Careers</li>
               </ul>
               <ul>
                   <li className="lihead">Walmart.com</li>
                   <li>Walmart Labs</li>
                   <li>Our Ads</li>
                   <li>Terms of Use</li>
                   <li>Privacy and Security</li>
                   <li>CA Privacy Rights</li>
                   <li>Do Not Sell My Personal Information</li>
                   <li>Request My Personal Information</li>
                   <li>Tax Exempt Program</li>
                   <li>California Supply Chain Security Act</li>
               </ul>
               <ul>
                    <li className="lihead">Customer Service</li>
                    <li>Help Center</li>
                    <li>Returns</li>
                    <li>Product Recalls</li>
                    <li>Accessibility</li>
                    <li>Contact Us</li>
                    <li>Store Pickup</li>
               </ul>
               <ul>
                    <li className="lihead">In the Spotlight</li>
                    <li>Portable Air Conditioners</li>
                    <li>PS4</li>
                    <li>Trampoline</li>
                    <li>Skateboard</li>
                    <li>Outdoor Furniture</li>
                    <li>Nintendo Switch Lite</li>
               </ul>
           </div>

           <div className="shopOurBrands">
               <div>
                   <p>Shop Our Brands</p>
               </div>
               <div>
                   <img src={Brand1} alt=""/>
               </div>
               <div>
                   <img src={Brand2} alt=""/>
               </div>
               <div>
                   <img src={Brand3} alt=""/>
               </div>
               <div>
                   <img src={Brand4} alt=""/>
               </div>
               <div>
                   <img src={Brand5} alt=""/>
               </div>
               <div>
                   <img src={Brand6} alt=""/>
               </div>
               <div>
                   <img src={Brand7} alt=""/>
               </div>
               <div>
                   <img src={Brand8} alt=""/>
               </div>
               <div>
                   <img src={Brand9} alt=""/>
               </div>
               <div>
                   <img src={Brand10} alt=""/>
               </div>
           </div>
           <hr/>
           <div className="footerSec4">
               <p>&copy 2021 Walmart. All Rights Reserved.</p>
               <p>To ensure we are able to help you as best as we can, please include your reference number. </p>
           </div>
       </div>
   );

};

export default Footer;