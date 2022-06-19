import React,{Component} from "react";
import './Library.css';

class Library extends Component{
    constructor(){
        super();
        this.showDetail = this.showDetail.bind(this);

        this.state = {
            change : 'Change',
            book : "Rich dad poor dad", 
            price : 8000
        }


    }


    HandleClick = () =>{
        console.log("Button is clicked")
        // setState is  used to change  the value of the state
        this.setState({
            change : "changed",
            book : "Poor Economics",
            price : 9000
        })
    }

    showDetail(){
        console.log("show detiail button clilcked");
        this.setState({
            book : "Revolution 2000",
            price : 10000
        })
    }
    

    render(){
        return (
            <div className="container" >
                <h2 >Welcome to Kathford Library</h2>

                <p>Book name : {this.state.book}</p>
                <p>Price: {this.state.price}</p>

                <button onClick={this.showDetail}>{this.state.change}</button>
            </div>
        )
    }
}

export default Library;

