import React, { Component } from 'react';
import { Provider } from './Context';
import Child from './Child';

export class Parent extends Component {
    constructor(){
        super();

        this.state={
            cName:"Coding Technology",
            city:"Kathmandu",
            count:1
        }
    }

    handleCount=()=>{
        this.setState({
            count:this.state.count+1
        })
    }

  render() {
      const contextValue = {
          data:this.state,
          handleClick:this.handleCount
      }
    return (
      <div>
          <h2>Using context Parent Component:</h2>
          <Provider value={contextValue}>
                <Child/>
          </Provider>

      </div>
    )
  }
}

export default Parent;
