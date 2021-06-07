import React from 'react';
import { Link } from "react-router-dom";


const Admin = () =>{

    return(
        <div className="adminpage">
         
            
            <div class="navigation">
           <div class="admin">
               <h2> <Link to="/admin">ADMIN</Link></h2>
           </div>
           <div class="allproducts">
               <p> <Link to="/allproducts">ALL PRODUCTS</Link></p>
           </div>
           <div class="createproducts">
               <p> <Link to="/createproduct">CREATE PRODUCT</Link></p>
           </div>
           <div class="allusers">
               <p> <Link to="#">ALL USERS</Link></p>
           </div>
           <div class="createusers">
               <p><Link to="#">CREATE USERS</Link></p>
           </div>
           
           <div class="emptyspace">
               <h2>EMPTY</h2>
           </div>
        </div>
       
       <div className="admincontent">
         <div className="productscolumn">
         <h4>PRODUCTS </h4>
         <p> 40 </p>
         </div>
         <div className="userscolumn">
         <h4>USERS </h4>
         <p> 4 </p>
         </div>
       
       </div>
        
        </div>
    );
};
 export default Admin;