import React, { Component } from "react";
import ChildForPhase from "./ChildForPhase";

class Phase extends Component {
  constructor(props) {
    super(props);
    console.log("1. At First constructor runs ");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("2. At second it runs");
  }
  componentDidMount() {
    console.log("4. componentDIdMount () runs");
  }

  componentDidUpdate() {
    console.log("5. componentDidUpdate(), runs after change in state. ");
  }
  componentWillUnmount() {
    console.log("It will run at last.");
  }
  render() {
    console.log("3. At third it runs");
    return (
      <div>
        <ChildForPhase favol="Purple" />
      </div>
    );
  }
}

export default Phase;
