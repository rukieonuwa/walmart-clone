import React,{useState} from "react";
import {Link} from "react-router-dom";
import "../signin.css";


const Createaccount = () => {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [name, setName] = useState("");
    let [phone, setPhone] = useState("");

    return(
        <div className="signin-container">
        <div className="signin">
            <p className="signin-head">Sign in to your Walmart account</p>
            <form action="http://206.189.124.254:9000/register" method="post">
              <div className="form-input">
              <input 
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              value={name}/>
              <input 
              id="phone"
              name="phone"
              type="text"
              placeholder="Phone"
              onChange={(e) => setPhone(e.target.value)}
               value={phone}/>
            <input 
              id="email"
              name="email"
              type="text"
              placeholder="Email address (required)"
              onChange={(e) => setEmail(e.target.value)}
               value={email}/>
               <input 
              id="password"
              name="password"
              type="password"
              placeholder="Password (required)"
              onChange={(e) => setPassword(e.target.value)}
               value={password}/>
                
             
               </div>

               <div className="forgotPasswd">
                   <Link className="forgotpasswd-link" to="#"><p>Forgot password?</p></Link>
               </div>

               <div>
                   <button className="signinbtn">
                       Create account
                   </button>
               </div>

            </form>

            <div>
                <p>Already have an account?</p>
                <Link to="signin">  <button className="createaccount">Sign in</button></Link>
            </div>
           

        </div>
        
        </div>
    );
};

export default Createaccount;

