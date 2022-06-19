import react, {Component} from 'react';
import ReactDOM from 'react-dom';
import '../App.css'

class Param extends Component{
    constructor(){
        super();
        
        this.state = {
            count : 0,
            name : "Abiral Tamang",
            age : 20
        }
    }

    // HandleClick = (name, age)=>{
    //     console.log(name);
    //     console.log(age);

    // }

    HandleIncrease =(count)=>{
        count = count + 1;
        this.setState({
            count : count
        })
    }

    
    HandleDecrease = (count)=>{
        count --;
        this.setState({
            count : count
        })
        

    }

    render(){
        return (
            <div className='App'>
                <h2>Counter</h2>

                {/* <button onClick={this.HandleClick.bind(this, "abiral")}>Click me</button> */}
                {/* <button onClick={this.HandleClick.bind(this, this.state.name, this.state.age)}>click to send state data</button> */}

                <h1>{this.state.count}</h1>

                <button onClick={this.HandleIncrease.bind(this, this.state.count)}>Increase</button>
                <button onClick={this.HandleDecrease.bind(this, this.state.count)}>Decrease</button>





            </div>
        )
    }
}

export default Param;
