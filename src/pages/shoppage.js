import React from "react";
import Header from "../components/wmheader";
import Products from "../components/products";
import Footer from "../components/footer";

const Shoppage = () =>{
   
    return(
        <div>
          <Header/>
          <div className="header2">
              <p>Personal Care/ Bath and Body</p>
              <div className="header-Col2">
                  <div><p>1-40 of 1,000 products</p></div>
                  <div className="header-col3">
                      <h4>Refine by</h4>
                      <p>Price </p>
                      <p>Top Brands</p>
                      <p>Store Availability</p>
                  </div>
                  <div>
                      <p>Sort By  |  Best Sellers</p>
                  </div>

              </div>
          </div>
          <Products/>
          <Footer/>

        </div>
    );
};

export default Shoppage;