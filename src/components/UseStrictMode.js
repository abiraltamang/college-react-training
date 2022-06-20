import React, { Component, StrictMode } from "react";
import Ucf from "./Ucf";

export class UseStrictMode extends Component {
  render() {
    return (
      <StrictMode>
        <Ucf />
      </StrictMode>
    );
  }
}

export default UseStrictMode;

{
  /**
    StrictMode is a tool for highlighting potential problems in an appplication. Like Fragments, strticMode doesnot 
    render any visible UI. It activates additional cheeks and warnings for its descendants.
*/
}
