import React,{useState, useEffect} from "react";
import {Link} from "react-router-dom";
import "../signin.css";


const Signin = () => {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");
    let [error, setError] = useState("");
    let [result, setResult] = useState("");

    useEffect(() => {
        fetch("http://206.189.124.254:9000/users")
          .then(res => res.json())
          .then(res => {
               let resu = res.find(function(val){
                if (val.password === password && val.email === email){
                      return resu;
                }
                

            })
            setResult(resu);
              
          })
          .catch(e => {
                console.log(e);
          })
    });

    let btnSignIn = () => {
        
        if (result) {
          setError("");
          <Link to="/homepage"></Link>
        }else {
          setError("Invalid username or password");
        }
      };



    return(
        <div className="signin-container">
        <div className="signin">
            <p className="signin-head">Sign in to your Walmart account</p>
            <form action="http://206.189.124.254:9000/login" method="post">
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

            </form>

            <div>
                <p>Don't have an account?</p>
                <Link to="createaccount">  <button className="createaccount">Create account</button></Link>
            </div>
           

        </div>
        
        </div>
    );
};

export default Signin;