import React, { Component, Fragment } from "react";

class ChildForPhase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      favouriteColor: "red",
    };
  }
  static getDerivedStateFromProps(props, state) {
    return { favouriteColor: props.favol };
  }
  render() {
    return (
      <Fragment>
        <h2>Fav color is {this.state.favouriteColor}</h2>
      </Fragment>
    );
  }
}
export default ChildForPhase;
