import React, { Component } from 'react';
import './Youtube.css'

export class Youtube extends Component {
    constructor(){
        super();
        
        this.state = {
            user : 'Abiral Blon',
            sub : 'Subscribe',
            message : 'Welcome to my Youtube channel, Like and Subscribe to miss new videos'
        }
    }s


    // myEvent =()=>{
    //     this.setState({
    //         sub: 'Subscribed',
    //         message : 'Thank you for subscribing'
    //     })
    // }
  render() {
      function myEvent(){
          console.log(this.state.sub)
      } 
    return (
      <div className='container'>
          <h2>Welcome to family</h2>
          <p>{this.state.message}</p>
          <h2>{this.state.user}</h2>
          <button onClick={myEvent}>{this.state.sub}</button>
      </div>
    )
  }
}

export default Youtube