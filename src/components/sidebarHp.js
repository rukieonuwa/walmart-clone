import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../sidebarHp.css";
import { ToggleBar } from "../context/toggle";
import img1 from "../assets/images/svg/package-black.8daf1339adc1c094701090f6199349e7371ed56b.svg";
import img2 from "../assets/images/svg/easyreorder-black.a9c7e2d9a0d04013144b768123ff9559a18d1d06.svg";
import img3 from "../assets/images/svg/walmart-credit-card-black.cc1a6c7649409c02f95db87bd6281ccd56cc3d4f.svg";
import img4 from "../assets/images/svg/pin-black.e86d2d33bef0f203aa5597c6abca2bc31a4fe9e4.svg";
import img5 from "../assets/images/svg/store-black.a3e4e9267961a159831be61402bfefafa9f6186f.svg";
import img6 from "../assets/images/svg/gift-black.82e7713e0e6a0a417736c7cf64c24973872f397a.svg";
import img7 from "../assets/images/svg/services-black.e1f2f36d1a3d4306c8927b58f61a58a28c449863.svg";
import img8 from "../assets/images/svg/vudu-black.2cefd144945e291664e4151ae35bf23dc2d786d5.svg";
import img9 from "../assets/images/svg/walmart-credit-card-black.cc1a6c7649409c02f95db87bd6281ccd56cc3d4f.svg";
import img10 from "../assets/images/svg/gift-card-black.6d0fbd93e1b2b84a6327794b945b5c58e63e2b9b.svg";
import img11 from "../assets/images/svg/weekly-ad-black.4a26ae0b982b0f2a6be4cd84fae7622cf17abea8.svg";
import img12 from "../assets/images/svg/help-black.9949c3361fb603fe2961330b2bccfd7d0260eac0.svg";
import img13 from "../assets/images/svg/angle-right-black.3b9eec11493c7dd7150878bf2e0723367efda153.svg";


const Sidebar = () => {
  let state = useContext(ToggleBar);
  let [toggle, setToggle] = state.sidebar;

  return (
    <div className={toggle ? "sbarwdth-container open" : "sbarwdth-container"}>
      <div className="sbarwdth">
        <div className="flex space-btw pad5 bgblue">
          <img
            className="slogo"
            src="//i5.walmartimages.com/dfw/63fd9f59-43e0/1ed7036a-feba-43ca-8885-1d937a9aa4f2/v1/spark-yellow-spark.b43cc07989a08d84d33b0c87dd8afb1998431e48.svg"
            alt="logo"
          />
          <img
            onClick={() => setToggle(false)}
            className="sclose"
            src="//i5.walmartimages.com/dfw/63fd9f59-43e0/1ed7036a-feba-43ca-8885-1d937a9aa4f2/v1/remove-white.124cb20181e249f5932de870a2d671ca76801665.svg"
            alt="close"
          />
        </div>


        <div>
          <h3 className="sidebarHeader">Walmart.com</h3>
          <div className="trackOrder">
            <img src={img1} alt="track order" />
            <p><Link className="trackorderlink" to="#">Track Orders</Link></p>
          </div>
          <div className="buyAgain">
            <img src={img2} alt="buy again" />
            <p><Link className="buyagainlink" to="#">Buy Again</Link></p>
          </div>
          <div className="walmartCreditCard">
            <img src={img3} alt="walmart credit card" />
            <p><Link className="walmartcclink" to="#">Walmart Credit Card</Link></p>
          </div>
          <div className="yourLocation">
            <img src={img4} alt="your location" />
            <p><Link className="yourlocationlink" to="#">Your Location</Link></p>
          </div>
          <div className="localStore">
            <img src={img5} alt="local store" />
            <p><Link className="localstorelink" to="#">Local Store</Link></p>
          </div>
          <hr />
        </div>

        <div className="sb-sec2">
          <h3>Departments</h3>
          <div >
            <p><Link className="savingSpotlight" to="#">Savings Spotlight</Link></p>
            <img src={img13} alt="angle right" />
          </div>
          <div >
            <p><Link className="fathersDay" to="#">Father's Day</Link></p>
            <img src={img13} alt="angle right" />
          </div>
          <div >
            <p><Link className="gradGift" to="#">Graduation Gifts</Link></p>
            <img src={img13} alt="angle right" />
          </div>
          <div >
            <p><Link className="electandOffice" to="#">Electronics and Office</Link></p>
            <img src={img13} alt="angle right" />
          </div>
          <div >
            <p><Link className="clotheShoesAccess" to="#">Clothing, Shoes and Accessories</Link></p>
            <img src={img13} alt="angle right" />
          </div>
          <div >
            <p><Link className="homeFurnAppliances" to="#">Home, Furniture and Appliances</Link></p>
            <img src={img13} alt="angle right" />
          </div>
          <div >
            <p><Link className="homeImprov" to="#">Home Improvement</Link></p>
            <img src={img13} alt="angle right" />
          </div>
          <div >
            <p><Link className="pharmHealthPersCare" to="shoppage">Pharmacy, Health and Personal Care</Link></p>
            <img src={img13} alt="angle right" />
          </div>
          <hr />
        </div>

        <div className="sb-sec3">
          <div>
            <img src={img6} alt="registry" />
            <p><Link className="registry" to=""> Registry</Link></p>
          </div>
          <div>
            <img src={img7} alt="walmart services" />
            <p><Link className="walmartServices" to=""> Walmart Services</Link></p>
          </div>
          <div>
            <img src={img8} alt="digital video by vudu" />
            <p><Link className="digitalVideo" to=""> Digital Video by Vudu</Link></p>
          </div>
          <div>
            <img src={img9} alt="walmart credit card" />
            <p><Link className="walmartCC" to=""> Walmart Credit Card</Link></p>
          </div>
          <div>
            <img src={img10} alt="gift cards" />
            <p><Link className="giftCard" to="">Gift Cards</Link></p>
          </div>
          <div>
            <img src={img11} alt="weekly ad" />
            <p><Link className="weeklyAd" to=""> Weekly Ad</Link></p>
          </div>
          <div>
            <img src={img12} alt="help" />
            <p><Link className="help" to=""> Help</Link></p>
          </div>

        </div>


      </div>
    </div>
  );
};

export default Sidebar;





