import React from 'react';
import { Link } from "react-router-dom";


const Admin = () =>{

    return(
        <div>
            <div class="navigation">
           <div class="admin">
               <h2> <Link to="/admin">Admin</Link></h2>
           </div>
           <div class="allproducts">
               <p> <Link to="/admin">ALL PRODUCTS</Link></p>
           </div>
           <div class="createproducts">
               <p> <Link to="/createproduct">CREATE PRODUCT</Link></p>
           </div>
           <div class="allusers">
               <p>ALL USERS</p>
           </div>
           <div class="createusers">
               <p>CREATE USERS</p>
           </div>
           
           <div class="emptyspace">
               <h2>EMPTY</h2>
           </div>
        </div>
        <div class="table">
            <div class="row header">
                <div class="col"><b>Image</b></div>
                <div class="col_name"><b>Name</b></div>
                <div class="col_des"><b>Description</b></div>
                <div class="col_price"><b>Price</b></div>
                <div class="col_qty"><b>Quantity</b></div>
                <div class="col_cat"><b>Category</b></div>
                <div class="col_edit"><b>Edit</b></div>
                <div class="col_del"><b>Delete</b></div>
               
            </div>
        </div>
        </div>
    );
};
 export default Admin;