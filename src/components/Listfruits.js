import React, { Component } from 'react';
import Fruits from './Fruits';

export class Listfruits extends Component {
    constructor(props){
        super(props);
    }
  render() {
    return (
      <div>
          <h2>Fruit name is :: {this.props.fruit}</h2>
      </div>
    )
  }
}


export default Listfruits;
