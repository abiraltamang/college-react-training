

import React, { Component } from 'react'

export class Ucf extends Component {
    constructor(){
        super();
        this.reactRef = React.createRef();
    }


    handleSubmit=()=>{
        var val=this.reactRef.current.value;
        console.log(val);
        this.reactRef.current.style.color = 'RED';
        this.reactRef.current.focus();
        
        
    }
    
    componentDidMount(){
        this.reactRef.current.focus();

    }
    componentWillMount(){
        console.log("user componentwillmount() used for strict mode ..")
    }

  render() {
    return (
      <div className='App'>
          <h2>This is uncontrolled form</h2>
          <input type="text" ref={this.reactRef} />
          <input type="submit" value="Click me" onClick={this.handleSubmit} />
      </div>
    )
  }
}

export default Ucf;

{/*There are two types of forms. 
1. controlled form 
2. Uncontrolled form*/}
