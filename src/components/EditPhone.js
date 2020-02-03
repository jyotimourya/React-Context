import React from "react";
import ProfileContext from "../contexts/profileContext";

class EditPhone extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { value } = this.state;
    return (
      <ProfileContext.Consumer>
        {({ profile, updateProfile }) => (
          <form
            onSubmit={event => {
              event.preventDefault();
              updateProfile({ phone: value });
            }}
          >
            <label>
              <div>Edit Phone</div>
              <input onChange={this.handleChange} type="tel" value={value} />
            </label>
            <button type="submit">Submit</button>
          </form>
        )}
      </ProfileContext.Consumer>
    );
  }
}

export default EditPhone;
