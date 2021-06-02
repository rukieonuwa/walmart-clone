import React from "react";
import Logo from "../assets/svg/in.svg";
import Home from "../assets/svg/home.svg";
import Job from "../assets/svg/job.svg";
import Message from "../assets/svg/message.svg";
import Network from "../assets/svg/network.svg";
import Notice from "../assets/svg/notice.svg";
import Search from "../assets/svg/search.svg";
import Profile from "../assets/img/femi.jpg";
import { Link } from "react-router-dom";

const OldHeader = () => {
  let navs = [
   {
      text: "",
      id: 0,
      link: "/",
      icon: Logo
    },
    {
      text: "search",
      id: 1,
      link: "/search",
      icon: Search
    },
    {
      text: "Home",
      id: 2,
      link: "/home",
      icon: Home
    },
    {
      text: "Network",
      id: 3,
      link: "/network",
      icon: Network
    },
    {
      text: "Job",
      id: 4,
      link: "/job",
      icon: Job
    },
    {
      text: "Notice",
      id: 5,
      link: "/notice",
      icon: Notice
    },
    {
      text: "Message",
      id: 6,
      link: "/messsage",
      icon: Message
    }
  ];
  return (
    <nav>
      <ul className="flex spaced w700">
       
        {navs.map((nav) => (
         
            <li key={nav.id}>
		 <Link to={nav.link} >
              <div>
                <img src={nav.icon} alt="icon" />
              </div>
              <span>{nav.text}</span>
		  </Link>
            </li>
        
        ))}
        
          <li key="profile">

	    <Link to="/profile">
            <div>
              <img className="img" src={Profile} alt="icon" />
            </div>
            <span>Me</span>
            <ul className="drop">
              <li>
                <Link to="/account">Account</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy</Link>
              </li>
              <li>
                <Link to="/help">Help</Link>
              </li>
            </ul>
	   </Link>
          </li>
      
      </ul>
    </nav>
  );
};

export default OldHeader;
