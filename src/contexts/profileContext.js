import React from "react";

const ProfileContext = React.createContext({
  profile: {},
  updateProfile: () => {}
});

export default ProfileContext;
