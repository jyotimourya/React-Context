import React from "react";
import EditProfile from "./EditProfile";
import ProfileInfo from "./ProfileInfo";
import ProfileContext from "../contexts/profileContext";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profile: {
        name: "Sundeep",
        email: "sundeep@example.com",
        phone: "9999999999"
      },
      isEditing: false
    };
  }

  // { email: 's@a.com', phone: '222222222' }
  updateProfile = newProfile => {
    const { profile } = this.state;
    this.setState({
      profile: {
        ...profile,
        ...newProfile
      },
      isEditing: false
    });
  };

  _toggleEdit = () => {
    this.setState({
      isEditing: !this.state.isEditing
    });
  };

  _editUi() {
    return <EditProfile />;
  }

  _infoUi() {
    return <ProfileInfo />;
  }

  render() {
    // const isEditing = this.state.isEditing;
    const { profile, isEditing } = this.state;
    return (
      <ProfileContext.Provider
        value={{
          profile: profile,
          updateProfile: this.updateProfile
        }}
      >
        <div>
          <div>{isEditing ? this._editUi() : this._infoUi()}</div>
          <button onClick={this._toggleEdit}>
            {isEditing ? "Close Editor" : "Edit Profile"}
          </button>
        </div>
      </ProfileContext.Provider>
    );
  }
}

export default Profile;
