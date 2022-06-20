import react, { Component } from "react";

class Friends extends Component {
  render() {
    let friendlist = ["Abiral", "Thanes", "Rupesh", "Arbin", "Kapil"];
    let display = friendlist.map((n) => <li>{n}</li>);
    return <div>{display}</div>;
  }
}
export default Friends;
