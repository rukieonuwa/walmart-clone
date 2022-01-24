import React from "react";
import Header from "../components/wmheader";
import Banner from "../components/banner";
import GridBanner from "../components/grid_banner";
import ShopCategories from "../components/shop_category";
import Footer from "../components/footer";
import Sidebar from "../components/sidebarHp";
import Cartsection from "../components/cartsection";



const Homepage = () => {
  
    return(
        <div>
          <Header/>
          <Sidebar/>
          <Cartsection/>
          <Banner/>
          <GridBanner/>
          <ShopCategories/>
          <Footer/>
        </div>
    );
};

export default Homepage;