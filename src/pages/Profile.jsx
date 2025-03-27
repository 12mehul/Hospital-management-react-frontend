import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import ProfileDetails from "../components/Profile/ProfileDetails";
import EditProfile from "../components/Profile/EditProfile";

const Profile = () => {
  const { user, setUser } = useAuth();
  const [showType, setShowType] = useState("details");
  const handleClick = (type) => setShowType(type);

  return (
    <>
      <div className="p-2 bg-white rounded-lg shadow-md">
        <h2 className="title">Profile</h2>
      </div>
      <div className="w-full mx-auto flex flex-col items-center justify-center my-6">
        {showType === "details" && (
          <ProfileDetails user={user} handleClick={handleClick} />
        )}
        {showType === "edit" && (
          <EditProfile
            user={user}
            setUser={setUser}
            handleClick={handleClick}
          />
        )}
      </div>
    </>
  );
};

export default Profile;
