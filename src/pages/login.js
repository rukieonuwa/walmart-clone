import React, { useState } from "react";
import logoImage from "../assets/svg/logo.svg";
import { Link } from "react-router-dom";

const ButtomNav = () => {
  let navs = [
    {
      text: "User Agreement",
      id: 1,
      link: "/agreement"
    },
    {
      text: "Privacy Policy",
      id: 2,
      link: "/privacy"
    },
    {
      text: "Cookie Policy",
      id: 3,
      link: "/policy"
    }
  ];
  return (
    <nav>
      <ul className="flex spaced">
        {navs.map((nav) => (
          <li key={nav.id}>
            <Link to={nav.link}>{nav.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
const Login = () => {
  let users = [
    {
      email: "devrus265@gmail.com",
      passwd: "spacesector2814",
      profile:
        "https://media-exp1.licdn.com/dms/image/C5603AQF0Y5SxZ7iwDg/profile-displayphoto-shrink_100_100/0/1539601725173?e=1625097600&v=beta&t=ol1mt9UVAwYnK2dkn1-nBbJe4yuyl0q1p6SdpUdhAK8",
      id: "13423423423",
      name: "Femi Jones",
      total_post: 45,
      total_view: 20
    }
  ];
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [error, setError] = useState("");
  let btnSignIn = () => {
    let user = users.find((x) => x.passwd === password && x.email === email);
    if (user) {
      setError("");
      delete user.passwd;
      localStorage.setItem("user", JSON.stringify(user));
      window.location.href = "/index";
    } else {
      setError("Invalid username or password");
    }
  };
  return (
    <div>
      <div className="center-item">
        <div>
          <div>
            <img src={logoImage} alt="linkedin-logo" />
          </div>
          <div>
            <h4>Sign In</h4>
            <div>Stay updated on your proffessional world</div>
          </div>
          <div>
            <input
              type="text"
              placeholder="Email or Phone"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
          <div>{error}</div>
          <div>
            <a href="/forgot-password">Forgot Password</a>
          </div>
          <div>
            <input type="button" value="Sign In" onClick={btnSignIn} />
          </div>
        </div>
      </div>
      <div>
        <ButtomNav />
      </div>
    </div>
  );
};

export default Login;
