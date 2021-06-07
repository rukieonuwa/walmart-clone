import React,{useState, useEffect} from "react";
import {Link,
useParams} from "react-router-dom";
import "../productpage.css";
import Footer from "../components/footer";
import Sidebar from "../components/sidebarHp";
import Header from "../components/wmheader";

const Productview = () => {

    let { id } = useParams();
    let [details, setDetails] = useState("");

    useEffect(() => {
        fetch(`http://206.189.124.254:9000/product/${id}`)
          .then(res => res.json())     
          .then(res => {

                  setDetails(res);
               })
              
        
          .catch(e => {
                console.log(e);
          })
    }, []);


    return(
        <div>
        <Header/>
        <Sidebar/>
        <div className="details">
        <div className=""><img src={"http://206.189.124.254:9000" + details.image} alt="product" /></div>
                <div className="col2">
                    <div className="row">{details.name}</div>
                    <div className="row">{details.quantity}</div>
                    <div className="row">{details.price}</div>
                    <div className="row">{details.description}</div>
                 </div>
        
        </div>
        <Footer/>
        </div>
    );
};

export default Productview;