import react, { Component } from "react";
import ReactDOM from "react-dom";
import "../App.css";

class Params extends Component {
  constructor() {
    super();

    this.state = {
      count: 0,
      message: "",
    };
  }

  HandleClick = (i) => {
    this.setState({
      count: this.state.count + 1,
    });

    if (this.state.count % 2 == 0) {
      this.setState({
        message: "This is odd number",
      });
    } else {
      this.setState({
        message: "This is even number",
      });
    }
  };

  render() {
    return (
      <div className="App">
        <h2>Counter</h2>

        <h1>{this.state.count}</h1>

        <button onClick={this.HandleClick.bind(this, 1)}>Increase</button>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default Params;
