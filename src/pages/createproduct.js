import React, {useState} from "react";
import {Link} from "react-router-dom";

const Createproduct = () => {
    let [image, setImage] = useState("");
    let [name, setName] = useState("");
    let [description, setDescription] = useState("");
    let [rating, setRating] = useState("");
    let [price, setPrice] = useState("");
    let [category, setCategory] = useState("All Bath and Body");
    
    

    return (
        <div>
        <div className="adminpage">
         
            
         <div className="navigation">
           <div className="admin">
               <h2> <Link to="/admin">ADMIN</Link></h2>
           </div>
           <div className="allproducts">
               <p> <Link to="/allproducts">ALL PRODUCTS</Link></p>
           </div>
           <div className="createproducts">
               <p> <Link to="/createproduct">CREATE PRODUCT</Link></p>
           </div>
           <div className="allusers">
               <p> <Link to="#">ALL USERS</Link></p>
           </div>
           <div className="createusers">
               <p><Link to="#">CREATE USERS</Link></p>
           </div>
           
           <div className="emptyspace">
               <h2>EMPTY</h2>
           </div>
        </div>
            <div className="form">
                <h1>CREATE PRODUCT</h1>
           <div>
               <form action="http://206.189.124.254:9000/create/product" method="post" enctype="multipart/form-data">
                   <div>
            <input
            className="imginput"
               type="file"
               name="image"
               id="image"
               onChange={(e) => setImage(e.target.value)}
               value={image}
               />
             </div>
           
            <div>
            <input
            className= "input"
               type="text"
               name="name"
               id="name"
               placeholder="Name"
               onChange={(e) => setName(e.target.value)}
               value={name}
               />
               </div>
               <div>    
            <input
            className="input"
              type="text"
              name="quantity"
              id="rating"
              placeholder="Rating"
              onChange={(e) => setRating(e.target.value)}
              value={rating}
            />
          </div>
          <div>
            <input
            className="input"
              type="text"
              name="price"
              id="price"
              placeholder="Price"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
          </div>
           <div>    
            <input
            className="input"
              type="text"
              name="description"
              id="deliverydescription"
              placeholder="Delivery"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </div>
          <div>
            <input
            className="input"
               type="text"
               name="category"
               id="category"
               onChange={(e) => setCategory(e.target.value)}
               value={category}
               />
            </div>
          
          
         
          <div>
            <button className="button">Submit</button>
          </div>
          </form>
          </div>
          </div>
          </div>
        </div>
      
    );
};

export default Createproduct;