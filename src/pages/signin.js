import React,{useState} from "react";
import {Link, useHistory} from "react-router-dom";
import "../signin.css";


const Signin = () => {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [error, setError] = useState("");
    //let [result, setResult] = useState("");
    let history = useHistory();
   
    let btnSignIn = () => {
     let body = {
       email: email,
       password: password
     }

      fetch("http://206.189.124.254:9000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      })
        .then(res => res.json())
        .then(res => { 
          if (res.error){
            setError("Invalid username or password");
          } else{
            history.push('/homepage')
          }
        })
         
              
          
        
        
      };

      



    return(
        <div className="signin-container">
        <div className="signin">
            <p className="signin-head">Sign in to your Walmart account</p>
            <div>
              <div className="form-input">
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
               <div>{error}</div>

               <div>
                   <button onClick={btnSignIn} className="signinbtn">
                       Sign in
                   </button>
               </div>

            </div>

            <div>
                <p>Don't have an account?</p>
                <Link to="createaccount">  <button className="createaccount">Create account</button></Link>
            </div>
           

        </div>
        
        </div>
    );
};

export default Signin;