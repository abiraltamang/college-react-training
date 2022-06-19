import React,{Component} from "react";

class ListNumber extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div>
                <p>Number  is  list :: {this.props.number}</p>
            </div>
        )
    }
}

export default ListNumber;