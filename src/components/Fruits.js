import React, { Component } from "react";
import Listfruits from './Listfruits'

class Fruits extends Component {
    constructor(props){
        super(props);
    }
  render() {
    let fruitList = ["Mango", "Banana", "Grapes", "Orange", "Litchi"];
    return (
        <div>
            <h2>Fruits list using  props</h2>
            {
                fruitList.map(f=><Listfruits fruit={f} />) 
            }
        </div>);
  }
}


export default Fruits;
