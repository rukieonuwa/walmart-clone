import React, { useEffect } from "react";
import Header from "../components/header";
import Profile from "../components/profile";
import Feed from '../components/feed'

const Index = () => {
  useEffect(() => {
    let user = localStorage.getItem("user");
    if (user) {
    } else {
      window.location.href = "/login";
    }
  });
  return (
    <div>
      <Header />
      <div className="flex spaced">
        <div>
          <Profile />
        </div>
        <div>
		<Feed />
	</div>
        <div>right bar</div>
      </div>
    </div>
  );
};

export default Index;
