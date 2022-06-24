import React, { Component } from "react";
import { Consumer } from "./Context";

export class Grandchild extends Component {
  render() {
    return (
      <div>
        <b>Grand child commponent:</b>
        <Consumer>
          {({ data, handleClick }) => (
            <div>
                <i>Company name : {data.cName}</i><br />
                <i>City: {data.city}</i><br />
                <i>Count: {data.count}</i><br />
              <button onClick={handleClick}>Click me</button>
            </div>
          )}
        </Consumer>
      </div>
    );
  }
}

export default Grandchild;
