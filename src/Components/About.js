

import React from "react";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor() {
    super();
    console.log("Parent constructor");
  }

  componentDidMount() {
    // Called once the component is mounted on the DOM
    console.log("Parent Component Did Mount");
  }

  render() {
    console.log("Parent render");
    return (
      <div>
        <UserClass name={"HP"} />
      </div>
    );
  }
}

export default About;
