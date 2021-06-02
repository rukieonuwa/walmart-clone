import React from "react";
import Image from "../assets/img/femi.jpg";

const Profile = () => {
  return (
    <div>
      <div className="profile">
        <div className="flex center-item">
          <img src={Image} alt="profile" />
        </div>
        <h4>
          <button  className="center-text size-17">
            Femi Oje-Jones
          </button>
        </h4>
        <div className="center-text size-14">
          Full-stack Developer at Rework Technologies
        </div>
        <div className="center-text size-10 line">
          <div>
            Who viewed your profile <span className="viewed">23</span>
          </div>
          <div>
            Views of your post <span className="viewed">3</span>
          </div>
       </div>
      </div>
    </div>
  );
};

export default Profile;
