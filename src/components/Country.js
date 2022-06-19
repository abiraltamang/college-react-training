// STATES:
// -state is used to change the existing data.
// -it is used to achieve the dynamic behaviour
// -states are always used with the class components
// -

import React,{Component} from "react";

import Citizen from './Citizen'

export class Country extends Component {
    constructor(props){
        super(props)
        this.state={
            name:"Nepal",
            state:"7",
            PM:"shere"
        }
    }



  render() {
    return (
      <div>
      <h2>country Details</h2>
      <p>Country name = {this.state.name}</p>
      <p>Number of states = {this.state.state}</p>
      <p>Prime minister  = {this.state.PM}</p>

      <Citizen countryName = {this.state.name}/>
      </div>
    )
  }
}

export default Country;