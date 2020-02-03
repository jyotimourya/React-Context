import React from "react";
import ProfileContext from "../contexts/profileContext";

function ProfileInfo() {
  return (
    <ProfileContext.Consumer>
      {({ profile }) => (
        <div>
          <div>Name: {profile.name}</div>
          <div>Email: {profile.email}</div>
          <div>Phone: {profile.phone}</div>
        </div>
      )}
    </ProfileContext.Consumer>
  );
}

export default ProfileInfo;
