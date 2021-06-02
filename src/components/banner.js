import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import Bannerimg1 from "../assets/images/homepage_img/k2-_913c9de5-c5a3-4371-b205-3078c7b58f0d.v1.jpg";
import Bannerimg2 from "../assets/images/homepage_img/k2-_fe527825-7396-448b-8482-251d9ba4e6d9.v1.jpg";
import Bannerimg3 from "../assets/images/homepage_img/k2-_586984f4-f67d-4ffe-ad97-dc1b929c8e24.v1.jpg";

const Banner = () => {
     return(
         <div>
             <div className="banner1">
            <Carousel>
              <div>
                  <img src={Bannerimg1} alt=""/>
              </div>
              <div>
                  <img src={Bannerimg2} alt=""/>
              </div>
              <div>
                  <img src={Bannerimg3} alt=""/>
              </div>
            </Carousel>
            </div>
         </div>
     );
};

export default Banner;