import React, { Component } from "react";

class Ucf extends Component {
  constructor() {
    super();

    //this.handleClick = this.handleClick.bind(this);  //We use this to bind normal functions

    //creating  ref
    this.myRef = React.createRef();
  }
  handleClick = () => {
    var val = this.myRef.current.value;
    console.log(val);
    this.myRef.current.style.color = "Red";
    this.myRef.current.focus();
  };

  /*
  // For using this  normal function, we need to bind this functions in constructor:
  handleClick() {
    var val = this.myRef.current.value;
    console.log(val);
    this.myRef.current.style.color = "Red";
    this.myRef.current.focus();
  }
*/

  componentDidMount = () => {
    // console.log(this.myRef.current);
    this.myRef.current.focus();
  };

  componentWillMount() {
    console.log("componentWillMOunt() used for strict mode");
  }

  render() {
    return (
      <div className="App">
        <h2>This is uncontrolled form</h2>
        <input type="text" ref={this.myRef} />
        <input type="submit" value="Submit" onClick={this.handleClick} />
      </div>
    );
  }
}
export default Ucf;

{
  /**
    In react, we have two types of form. 
        1. Uncontrolled form 
        2. Controlled form

    For controlled form, we use refs; 

        Creating  REfs:
            Refs are created using React.createRef() and attached to React elements via the ref attribute.
            
            //creating a ref to store the DOM element
            this.meRef = React.createRef();

            //attaching crated ref tp the react  element
            return <div ref={this.myRef}/>

        Accessing Refs
            When a ref is passed to an element in render, a reference to the node becomes accessible at the current attribute of the ref
            const node = this.myRef.current;

*/
}
