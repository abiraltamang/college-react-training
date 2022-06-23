import React, { Component } from "react";

class Cf1 extends Component{
    constructor(){
        super();

        this.state={
            name:"",
            phone:"",
            address:""
        }
    }

    handleChange =(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        });
        
    }
    handleSubmit =(e)=>{
        e.preventDefault();
        console.log(this.state.name + "..." + this.state.phone);
        console.log(this.state.name + "..." + this.state.address);
    }
    render(){
        return(
            <div>
                <h2>Controlled form:</h2>
                <form onSubmit={this.handleSubmit}>
                Name: <input type="text" name="name" value={this.state.name} onChange={this.handleChange} /><br/>
                Phone: <input type="text" name="phone" value={this.state.phone} onChange={this.handleChange} /><br/>
                Address: <input type="text" name="address" value={this.state.address} onChange={this.handleChange} /><br/>
                <input type="submit" value="Submit"/> 

                <h2>inputted value : {this.state.name}</h2>
                </form>
            </div>
        )
    }
}
export default Cf1;